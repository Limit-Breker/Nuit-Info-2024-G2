from django.core.management.base import BaseCommand, CommandError
from core.models import InformationOrgane


class Command(BaseCommand):
    help = 'Populate the database with information about organs.'

    def handle(self, *args, **options):
        # check if the database is already populated with information about organs, if not populate it
        if not InformationOrgane.objects.exists():
            InformationOrgane.objects.create(organe='Coeur', nom='Cœur : Courants marins', description='Le cœur, moteur vital, pompe le sang pour transporter l’oxygène et les nutriments dans tout le corps. De manière similaire, les courants marins, tels que le Gulf Stream, distribuent la chaleur, les nutriments, et l’oxygène à travers les océans. Ces courants régulent le climat, soutiennent la biodiversité et assurent la circulation de la vie dans les écosystèmes marins, tout comme le cœur maintient la vie dans le corps humain.')
            InformationOrgane.objects.create(organe='Poumon', nom='Poumons : Phytoplancton et forêts de kelp', description='Les poumons permettent la respiration en échangeant l’oxygène et le dioxyde de carbone. Dans l’océan, le phytoplancton et les forêts de kelp remplissent cette fonction à une échelle planétaire, produisant plus de 50 % de l’oxygène mondial grâce à la photosynthèse. Ces organismes marins soutiennent la vie sur Terre, tout comme les poumons soutiennent la vie humaine.')
            InformationOrgane.objects.create(organe='Foie', nom='Foie : Cycle biogéochimique des nutriments', description='Le foie régule les nutriments, stocke les ressources essentielles et détoxifie les substances nocives. Dans l’océan, les cycles biogéochimiques, comme ceux du carbone, de l’azote et du phosphore, régulent la disponibilité des éléments essentiels, absorbent le carbone excédentaire et le stockent dans les profondeurs. Ces cycles agissent comme un "foie" pour maintenir l’équilibre chimique de l’océan, soutenant la vie marine et la santé de la planète.')
            InformationOrgane.objects.create(organe='Rein', nom='Reins : Mangroves et herbiers marins', description='Les reins filtrent les déchets, équilibrent les niveaux d’eau et maintiennent l’homéostasie dans le corps. Les mangroves et les herbiers marins jouent un rôle similaire en filtrant les polluants, en retenant les sédiments et en protégeant les côtes contre l’érosion. Ces écosystèmes côtiers, véritables "reins" de l’océan, empêchent les excès de nutriments et les polluants d’atteindre les eaux profondes, assurant un environnement marin propre et stable.')
            self.stdout.write(self.style.SUCCESS('Database populated with information about organs.'))
