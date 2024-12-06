from django.core.management.base import BaseCommand, CommandError
from core.models import InformationOrgane
from infos.models import Info


class Command(BaseCommand):
    help = 'Populate the database with information about organs.'

    def handle(self, *args, **options):
        # check if the database is already populated with information about organs, if not populate it
        if not InformationOrgane.objects.exists():
            coeur = InformationOrgane.objects.create(organe='Coeur', nom='Cœur : Courants marins', description='Le cœur, moteur vital, pompe le sang pour transporter l’oxygène et les nutriments dans tout le corps. De manière similaire, les courants marins, tels que le Gulf Stream, distribuent la chaleur, les nutriments, et l’oxygène à travers les océans. Ces courants régulent le climat, soutiennent la biodiversité et assurent la circulation de la vie dans les écosystèmes marins, tout comme le cœur maintient la vie dans le corps humain.')
            Info.objects.create(organe=coeur, name='Courants marins', description="Les courants marins jouent un rôle essentiel dans la régulation du climat mondial et des écosystèmes marins. La circulation thermohaline, surnommée 'la ceinture de transport des océans', redistribue la chaleur des tropiques vers les pôles et régule les conditions climatiques globales. Ces flux influencent directement les habitats marins, la distribution des nutriments, et la productivité biologique, assurant ainsi la survie des écosystèmes marins. Par ailleurs, les courants redistribuent l'oxygène dissous, indispensable à la vie marine, particulièrement dans les zones vulnérables aux changements climatiques. Cependant, les perturbations causées par le réchauffement global et la fonte des glaces altèrent ces courants, entraînant des événements climatiques extrêmes, des montées du niveau de la mer et des changements dans les habitats marins. Les avancées technologiques, comme les systèmes Argo et GRACE, permettent de mieux comprendre et prévoir ces dynamiques pour soutenir les efforts d’adaptation et de résilience.")
            Info.objects.create(organe=coeur, name='Changements climatiques et prévisions océaniques', description="Les changements climatiques perturbent profondément les courants marins, notamment la circulation thermohaline, qui agit comme un régulateur climatique mondial. Le réchauffement des eaux de surface et la fonte des calottes glaciaires modifient la salinité et la densité de l'eau, ralentissant le 'conveyor belt' océanique. Ces perturbations peuvent entraîner des événements climatiques extrêmes, tels que des ouragans plus puissants et des périodes prolongées d'El Niño ou de La Niña. Les niveaux de la mer augmentent également en raison de l'expansion thermique et de la fonte des glaces, menaçant directement les communautés côtières. Pour mieux comprendre et anticiper ces dynamiques, des technologies avancées comme les systèmes Argo (mesure de la température et de la salinité) et GRACE (analyse des variations gravitationnelles) permettent de suivre l'évolution des courants marins. Ces données sont intégrées dans des modèles climatiques sophistiqués qui aident les scientifiques à prédire les interactions complexes entre l'océan et l'atmosphère. Ces prévisions sont essentielles pour développer des stratégies d'adaptation, comme la gestion des pêches ou la protection des habitats côtiers, et pour renforcer la résilience des communautés face aux risques climatiques.")

            poumon = InformationOrgane.objects.create(organe='Poumon', nom='Poumons : Phytoplancton et forêts de kelp', description='Les poumons permettent la respiration en échangeant l’oxygène et le dioxyde de carbone. Dans l’océan, le phytoplancton et les forêts de kelp remplissent cette fonction à une échelle planétaire, produisant plus de 50 % de l’oxygène mondial grâce à la photosynthèse. Ces organismes marins soutiennent la vie sur Terre, tout comme les poumons soutiennent la vie humaine.')
            Info.objects.create(organe=poumon, name='Phytoplanctons', description="Les phytoplanctons, éléments clés des écosystèmes marins, forment la base des chaînes alimentaires et contribuent activement aux cycles biogéochimiques, notamment en capturant le dioxyde de carbone et en produisant de l'oxygène. Ils représentent environ 50 % de la production primaire mondiale. Cependant, leur équilibre est menacé par l'eutrophisation côtière due à des apports excessifs d'azote et de phosphore provenant des activités humaines, favorisant des proliférations nuisibles telles que les algues dinoflagellés. Ces proliférations perturbent les réseaux trophiques et la biodiversité. Les interactions avec le réchauffement des océans, l'acidification et les changements dans les courants marins exacerbent ces impacts, compromettant le rôle vital des phytoplanctons dans la régulation des écosystèmes marins et la captation du carbone. Ces organismes microscopiques sont également sensibles à l'intensité lumineuse, à la disponibilité des nutriments et aux changements de température, ce qui en fait des indicateurs des altérations environnementales globales.")
            Info.objects.create(organe=poumon, name='Forêts de kelp', description="Les forêts de kelp, véritables piliers de biodiversité, offrent un habitat crucial pour une multitude d'espèces marines, y compris les poissons, les invertébrés et les mammifères marins. Ces algues géantes peuvent croître jusqu'à 60 cm par jour dans des conditions optimales, jouant un rôle central dans la stabilisation des écosystèmes côtiers. Toutefois, elles subissent les effets combinés du réchauffement des océans, de l'acidification et de la pollution, ce qui fragilise leur résilience et leur capacité à maintenir leur rôle écologique. En plus d’offrir un habitat, les forêts de kelp captent et stockent du carbone, protégeant les côtes contre l'érosion en atténuant l'énergie des vagues. Leur perte, causée par des facteurs tels que la surpêche des espèces herbivores ou les vagues de chaleur marines, entraîne un déclin de la biodiversité et une réduction de leur capacité à stocker du carbone. Les initiatives de restauration, comme le repiquage des jeunes kelps, visent à préserver ces écosystèmes critiques.")

            foie = InformationOrgane.objects.create(organe='Foie', nom='Foie : Cycle biogéochimique des nutriments', description='Le foie régule les nutriments, stocke les ressources essentielles et détoxifie les substances nocives. Dans l’océan, les cycles biogéochimiques, comme ceux du carbone, de l’azote et du phosphore, régulent la disponibilité des éléments essentiels, absorbent le carbone excédentaire et le stockent dans les profondeurs. Ces cycles agissent comme un "foie" pour maintenir l’équilibre chimique de l’océan, soutenant la vie marine et la santé de la planète.')
            Info.objects.create(organe=foie, name='Distorsion et impacts des cycles des nutriments', description="Le cycle biogéochimique des nutriments est un régulateur essentiel des écosystèmes marins, comparable au rôle métabolique du foie dans le corps humain. L'azote et le phosphore, en quantités équilibrées, soutiennent la production primaire et la vie marine. Cependant, l'intensification agricole et urbaine a conduit à un excès de ces nutriments, provoquant des phénomènes d’eutrophisation dans les zones côtières. Cette surabondance favorise les algues nuisibles, telles que les dinoflagellés, entraînant des zones mortes hypoxiques. En parallèle, le réchauffement climatique amplifie ces problèmes en augmentant la stratification des eaux, limitant le mélange des couches océaniques et l’apport d’oxygène en profondeur. Ce cycle est également vital dans le contexte du carbone, car les océans agissent comme des puits pour environ 30 % des émissions anthropiques de CO2, jouant un rôle clé dans l'atténuation du changement climatique.")
            Info.objects.create(organe=foie, name='Changements climatiques et interactions', description="Les changements climatiques aggravent les déséquilibres des cycles biogéochimiques dans les océans. La hausse des températures de surface renforce la stratification de la colonne d’eau, empêchant le mélange entre les couches profondes et superficielles. Cela réduit l’apport d’oxygène aux eaux profondes, créant des zones hypoxiques qui mettent en péril les écosystèmes benthiques. Cette stratification limite également la remontée des nutriments essentiels, affectant la productivité primaire des phytoplanctons. L’acidification des océans, causée par l’absorption de dioxyde de carbone atmosphérique, interagit avec ces phénomènes. Elle modifie la chimie marine, rendant la vie plus difficile pour les organismes à coquilles calcaires, tels que les coraux et les mollusques, ce qui perturbe les chaînes alimentaires. Ces impacts sont exacerbés par l’eutrophisation côtière, où les apports excessifs d’azote et de phosphore créent des proliférations d’algues nuisibles. Ces interactions complexes nécessitent une gestion holistique des océans pour limiter les effets cumulés du changement climatique et des activités humaines.")

            rein = InformationOrgane.objects.create(organe='Rein', nom='Reins : Mangroves et herbiers marins', description='Les reins filtrent les déchets, équilibrent les niveaux d’eau et maintiennent l’homéostasie dans le corps. Les mangroves et les herbiers marins jouent un rôle similaire en filtrant les polluants, en retenant les sédiments et en protégeant les côtes contre l’érosion. Ces écosystèmes côtiers, véritables "reins" de l’océan, empêchent les excès de nutriments et les polluants d’atteindre les eaux profondes, assurant un environnement marin propre et stable.')
            self.stdout.write(self.style.SUCCESS('Database populated with information about organs.'))
            Info.objects.create(organe=rein, name='Mangroves', description="Les mangroves, composantes essentielles des écosystèmes de carbone bleu, se situent à l’interface entre la terre et la mer, offrant une barrière naturelle contre l’érosion côtière et les tempêtes. Elles séquestrent jusqu'à 168 g de carbone par m² chaque année, contribuant à atténuer le changement climatique. Ces écosystèmes abritent également une biodiversité unique et servent de nurseries pour de nombreuses espèces marines. Cependant, leur dégradation par la conversion en bassins d’aquaculture ou l’urbanisation entraîne une perte importante de leur capacité de stockage de carbone, jusqu’à 92 % des stocks initiaux, et libère des gaz à effet de serre dans l’atmosphère. La conservation et la restauration des mangroves sont des priorités pour préserver leurs services écologiques.")
            Info.objects.create(organe=rein, name='Herbiers marins', description="Les herbiers marins, souvent appelés 'prairies sous-marines', jouent un rôle clé dans la séquestration du carbone et la protection des côtes. Ces écosystèmes capturent environ 83 g de carbone par m² chaque année et servent de refuges pour une grande variété d’espèces marines. Ils stabilisent les sédiments et atténuent l’énergie des vagues, protégeant ainsi les littoraux. Malheureusement, leur dégradation, causée par les activités humaines comme la pollution et l'aménagement côtier, entraîne une libération massive de carbone stocké, aggravant le changement climatique. La préservation des herbiers marins est essentielle pour maintenir la résilience des écosystèmes marins face aux perturbations environnementales.")
            
            
        