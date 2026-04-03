import json
import re

html_path = 'index.html'

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

replacements_html = [
    ('<h2 class=\"hero-subtitle\" data-i18n=\"hero-subtitle\">Analyse économique guidée par l’IA. Rigueur académique, vision technologique.</h2>', '<h2 class=\"hero-subtitle\" data-i18n=\"hero-subtitle\">Analyse économique guidée par l’IA. Rigueur académique, vision technologique.</h2>'),
    ('<a href=\"#about\" class=\"btn\">Voir mon parcours</a>', '<a href=\"#about\" class=\"btn\" data-i18n=\"hero-btn\">Voir mon parcours</a>'),
    ('<h2>À propos de moi</h2>', '<h2 data-i18n=\"about-title\">À propos de moi</h2>'),
    ('<h3>Qui suis-je ?</h3>', '<h3 data-i18n=\"about-q1\">Qui suis-je ?</h3>'),
    ('<p>Je suis un étudiant en économie curieux et déterminé. Au-delà des chiffres, je cherche à\n                        comprendre les mécanismes qui régissent nos échanges et notre société.</p>', '<p data-i18n=\"about-p1\">Je suis un étudiant en économie curieux et déterminé. Au-delà des chiffres, je cherche à comprendre les mécanismes qui régissent nos échanges et notre société.</p>'),
    ('<h3>Mon objectif</h3>', '<h3 data-i18n=\"about-q2\">Mon objectif</h3>'),
    ('<p>Devenir un acteur clé dans l\\'analyse économique et la gestion de projets, en apportant une vision\n                        claire et structurée.</p>', '<p data-i18n=\"about-p2\">Devenir un acteur clé dans l\\'analyse économique et la gestion de projets, en apportant une vision claire et structurée.</p>'),
    ('<h3>Ma philosophie</h3>', '<h3 data-i18n=\"about-q3\">Ma philosophie</h3>'),
    ('<p>Authentique, calme et confiant. Je crois en la valeur du travail bien fait et de la rigueur.</p>', '<p data-i18n=\"about-p3\">Authentique, calme et confiant. Je crois en la valeur du travail bien fait et de la rigueur.</p>'),
    ('<h2 class=\"section-title\">Expériences</h2>', '<h2 class=\"section-title\" data-i18n=\"exp-title\">Expériences</h2>'),
    ('<h3>Stage | D.G.I</h3>', '<h3 data-i18n=\"exp-1-title\">Stage | D.G.I</h3>'),
    ('<p>Immersion professionnelle au sein de la Direction Générale des Impôts. Observation des procédures fiscales et administratives.</p>', '<p data-i18n=\"exp-1-desc\">Immersion professionnelle au sein de la Direction Générale des Impôts. Observation des procédures fiscales et administratives.</p>'),
    ('<h3>Job Étudiant | L.A.C</h3>', '<h3 data-i18n=\"exp-2-title\">Job Étudiant | L.A.C</h3>'),
    ('<p>Expérience en gestion de caisse et relation client. Développement de la rigueur et de la responsabilité.</p>', '<p data-i18n=\"exp-2-desc\">Expérience en gestion de caisse et relation client. Développement de la rigueur et de la responsabilité.</p>'),
    ('<h2>Compétences</h2>', '<h2 data-i18n=\"skills-title\">Compétences</h2>'),
    ('<h3>Statistiques & Excel</h3>', '<h3 data-i18n=\"skill-1-title\">Statistiques & Excel</h3>'),
    ('<p>Traitement de données complexes, tableaux croisés dynamiques, modélisation et analyse prédictive.</p>', '<p data-i18n=\"skill-1-desc\">Traitement de données complexes, tableaux croisés dynamiques, modélisation et analyse prédictive.</p>'),
    ('<h3>Outils Numériques</h3>', '<h3 data-i18n=\"skill-2-title\">Outils Numériques</h3>'),
    ('<p>Maîtrise des environnements de travail digitaux et des outils de productivité modernes.</p>', '<p data-i18n=\"skill-2-desc\">Maîtrise des environnements de travail digitaux et des outils de productivité modernes.</p>'),
    ('<h3>Model Context Protocol (MCP)</h3>', '<h3 data-i18n=\"skill-3-title\">Model Context Protocol (MCP)</h3>'),
    ('<p>Expertise dans l\\'interopérabilité des données et la connexion de l\\'IA aux outils externes via serveurs MCP.</p>', '<p data-i18n=\"skill-3-desc\">Expertise dans l\\'interopérabilité des données et la connexion de l\\'IA aux outils externes via serveurs MCP.</p>'),
    ('<h3>AI Agents & Claude Code</h3>', '<h3 data-i18n=\"skill-4-title\">AI Agents & Claude Code</h3>'),
    ('<p>Développement de workflows autonomes et intégration de Claude Code pour l\\'optimisation des tâches complexes.</p>', '<p data-i18n=\"skill-4-desc\">Développement de workflows autonomes et intégration de Claude Code pour l\\'optimisation des tâches complexes.</p>'),
    ('<h3>Claude 101</h3>', '<h3 data-i18n=\"skill-5-title\">Claude 101</h3>'),
    ('<p>Learn how to use Claude for everyday work tasks, understand core features, and explore resources for more advanced learning on other topics.</p>', '<p data-i18n=\"skill-5-desc\">Apprendre à utiliser Claude pour les tâches quotidiennes, comprendre les fonctionnalités principales et explorer des ressources avancées.</p>'),
    ('<h3>AI Fluency & Collaboration</h3>', '<h3 data-i18n=\"skill-6-title\">AI Fluency & Collaboration</h3>'),
    ('<p>Collaboration responsable homme-machine et expertise en Prompt Engineering pour des résultats de haute précision.</p>', '<p data-i18n=\"skill-6-desc\">Collaboration professionnelle homme-machine et expertise en Prompt Engineering pour des résultats de haute précision.</p>'),
    ('<h2 class=\"section-title\">Formation</h2>', '<h2 class=\"section-title\" data-i18n=\"edu-title\">Formation</h2>'),
    ('<h3>Licence 2 (L2) en Économie et Développement</h3>', '<h3 data-i18n=\"edu-1-title\">Licence 2 (L2) en Économie et Développement</h3>'),
    ('<span class=\"formation-date\">En cours</span>', '<span class=\"formation-date\" data-i18n=\"edu-1-date\">En cours</span>'),
    ('<p class=\"formation-institution\">Université Catholique du Congo (UCC) – Kinshasa</p>', '<p class=\"formation-institution\" data-i18n=\"edu-1-inst\">Université Catholique du Congo (UCC) – Kinshasa</p>'),
    ('<p class=\"formation-details\">Faculté d’Économie et Développement. Approfondissement des théories économiques, analyse statistique et mécanismes de développement durable.</p>', '<p class=\"formation-details\" data-i18n=\"edu-1-desc\">Faculté d’Économie et Développement. Approfondissement des théories économiques, analyse statistique et mécanismes de développement durable.</p>'),
    ('<h3>Baccalauréat – Option Commerciale</h3>', '<h3 data-i18n=\"edu-2-title\">Baccalauréat – Option Commerciale</h3>'),
    ('<p class=\"formation-institution\">École Révérend Kim – Kinshasa</p>', '<p class=\"formation-institution\" data-i18n=\"edu-2-inst\">École Révérend Kim – Kinshasa</p>'),
    ('<p class=\"formation-details\">Mention : Bien. Spécialisation en gestion commerciale, comptabilité et économie d\\'entreprise.</p>', '<p class=\"formation-details\" data-i18n=\"edu-2-desc\">Mention : Bien. Spécialisation en gestion commerciale, comptabilité et économie d\\'entreprise.</p>'),
    ('<h2 class=\"section-title\">Langues</h2>', '<h2 class=\"section-title\" data-i18n=\"lang-title\">Langues</h2>'),
    ('<h3>Français</h3>', '<h3 data-i18n=\"lang-1\">Français</h3>'),
    ('<h3>Anglais</h3>', '<h3 data-i18n=\"lang-2\">Anglais</h3>'),
    ('<h3>Lingala</h3>', '<h3 data-i18n=\"lang-3\">Lingala</h3>'),
    ('<span class=\"badge\">COURANT</span>', '<span class=\"badge\" data-i18n=\"lang-fluent\">COURANT</span>'),
    ('<h2 class=\"section-title\" style=\"color: var(--primary-color);\">CURRICULUM VITAE</h2>', '<h2 class=\"section-title\" style=\"color: var(--primary-color);\" data-i18n=\"cv-title\">CURRICULUM VITAE</h2>'),
    ('<h3 style=\"color: var(--primary-color); margin-bottom: 1rem;\">CURRICULUM VITAE</h3>', '<h3 style=\"color: var(--primary-color); margin-bottom: 1rem;\" data-i18n=\"cv-title\">CURRICULUM VITAE</h3>'),
    ('<p>Découvrez mon parcours détaillé, mes certifications et mes réalisations académiques en un coup d\\'œil.</p>', '<p data-i18n=\"cv-desc\">Découvrez mon parcours détaillé, mes certifications et mes réalisations académiques en un coup d\\'œil.</p>'),
    ('<h2 class=\"section-title\">Centres d\\'Intérêt</h2>', '<h2 class=\"section-title\" data-i18n=\"int-title\">Centres d\\'Intérêt</h2>'),
    ('<h3>Cinéma</h3>', '<h3 data-i18n=\"int-1-title\">Cinéma</h3>'),
    ('<p>Passionné par le septième art, l\\'analyse cinématographique et la narration visuelle.</p>', '<p data-i18n=\"int-1-desc\">Passionné par le septième art, l\\'analyse cinématographique et la narration visuelle.</p>'),
    ('<h3>Intelligence Artificielle</h3>', '<h3 data-i18n=\"int-2-title\">Intelligence Artificielle</h3>'),
    ('<p>Veille active sur les innovations technologiques et l\\'impact de l\\'IA dans l\\'économie.</p>', '<p data-i18n=\"int-2-desc\">Veille active sur les innovations technologiques et l\\'impact de l\\'IA dans l\\'économie.</p>'),
    ('<h3>Football</h3>', '<h3 data-i18n=\"int-3-title\">Football</h3>'),
    ('<p>Passion pour le ballon rond. Esprit d\\'équipe, stratégie et résilience sur le terrain.</p>', '<p data-i18n=\"int-3-desc\">Passion pour le ballon rond. Esprit d\\'équipe, stratégie et résilience sur le terrain.</p>'),
    ('<h3>Musique</h3>', '<h3 data-i18n=\"int-4-title\">Musique</h3>'),
    ('<p>Exploration de divers genres musicaux et intérêt pour la composition et le rythme.</p>', '<p data-i18n=\"int-4-desc\">Exploration de divers genres musicaux et intérêt pour la composition et le rythme.</p>'),
    ('<h3>Lecture</h3>', '<h3 data-i18n=\"int-5-title\">Lecture</h3>'),
    ('<p>Lectures centrées sur le développement personnel et les actualités économiques mondiales.</p>', '<p data-i18n=\"int-5-desc\">Lectures centrées sur le développement personnel et les actualités économiques mondiales.</p>'),
    ('<h3>Musculation</h3>', '<h3 data-i18n=\"int-6-title\">Musculation</h3>'),
    ('<p>Discipline et dépassement de soi. Travail sur la force physique et la persévérance au quotidien.</p>', '<p data-i18n=\"int-6-desc\">Discipline et dépassement de soi. Travail sur la force physique et la persévérance au quotidien.</p>'),
    ('<h2 class=\"section-title\">Me Contacter</h2>', '<h2 class=\"section-title\" data-i18n=\"contact-title\">Me Contacter</h2>'),
    ('<p class=\"contact-intro\" style=\"font-size: 1.2rem; color: var(--text-muted); max-width: 600px; margin: 0 auto;\">\n                Disponible pour des projets innovants, des collaborations créatives ou toute opportunité passionnante.\n            </p>', '<p class=\"contact-intro\" style=\"font-size: 1.2rem; color: var(--text-muted); max-width: 600px; margin: 0 auto;\" data-i18n=\"contact-desc\">Disponible pour des projets innovants, des collaborations créatives ou toute opportunité passionnante.</p>'),
    ('<p>&copy; 2026 Beni Makiese. Tous droits réservés.</p>', '<p data-i18n=\"footer-text\">&copy; 2026 Beni Makiese. Tous droits réservés.</p>')
]

for old, new in replacements_html:
    html = html.replace(old, new)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print('Updated HTML.')
