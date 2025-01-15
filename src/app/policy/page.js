'use client';
import {useEffect} from "react";


export default function Policy() {
  useEffect(() => {
    fetch('/api/policy').then(res => {
      res.json().then(policy => setpolicy(policy))
    });
  }, []);
    return (
    
        <header>
          <div className="border-t  mt-12">
            <div className="mt-8"></div>
          </div>

<p className="text-black inknut">Datenschutzrichtlinie</p>
<p className="mt-4">Zuletzt aktualisiert: 1. Januar 2025</p>
<p className="text-justify">Diese Datenschutzrichtlinie beschreibt unsere Richtlinien und Verfahren zur Erfassung, Verwendung und Offenlegung Ihrer Daten bei der Nutzung des Dienstes und informiert Sie über Ihre Datenschutzrechte und wie das Gesetz Sie schützt.
Wir verwenden Ihre personenbezogenen Daten, um den Dienst bereitzustellen und zu verbessern. Durch die Nutzung des Dienstes stimmen Sie der Erfassung und Verwendung von Informationen gemäß dieser Datenschutzrichtlinie zu.
</p>
<p className="mt-4 text-black inknut">Interpretation and Definitions</p>
<h2 className="mt-4">Interpretation:</h2>
<p className="text-justify">Die Wörter, deren Anfangsbuchstabe groß geschrieben ist, haben unter den folgenden Bedingungen die definierte Bedeutung. Die folgenden Definitionen haben dieselbe Bedeutung, unabhängig davon, ob sie im Singular oder im Plural stehen.</p>
<h2 className="mt-4" >Definitionen:</h2>
<p className="text-justify">Für die Zwecke dieser Datenschutzrichtlinie:</p>
<p className="ml-8 text-justify">• „Konto“ bezeichnet ein einzigartiges Konto, das für Sie erstellt wird, um auf unseren Dienst oder Teile unseres Dienstes zuzugreifen.</p>
<p className="ml-8 text-justify">• Verbundenes Unternehmen bedeutet ein Unternehmen, das eine Partei kontrolliert, von einer Partei kontrolliert wird oder mit einer Partei unter gemeinsamer Kontrolle steht, wobei Kontrolle den Besitz von 50 % oder mehr der Aktien, Anteile oder anderen Wertpapiere bedeutet, die zur Wahl von Direktoren oder anderen Leitungsorganen berechtigt sind.</p>
<p className="ml-8 text-justify">• Unternehmen (in dieser Vereinbarung als „das Unternehmen“, „Wir“, „Uns“ oder „Unser“ bezeichnet) bezieht sich auf Greek Tasty, Bahnhofstr. 11, 58762 Altena, Deutschland.</p>
<p className="ml-8 text-justify">• Cookies sind kleine Dateien, die von einer Website auf Ihrem Computer, Mobilgerät oder einem anderen Gerät abgelegt werden und die unter anderem Einzelheiten zu Ihrem Browserverlauf auf dieser Website enthalten.</p>
<p className="ml-8 text-justify">• Land bezieht sich auf: Nordrhein-Westfalen, Deutschland</p>
<p className="ml-8 text-justify">• „Gerät“ bezeichnet jedes Gerät, das auf den Dienst zugreifen kann, beispielsweise ein Computer, ein Mobiltelefon oder ein Tablet.</p>
<p className="ml-8 text-justify">• Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen.</p>
<p className="ml-8 text-justify">• „Service“ bezieht sich auf die Website.</p>
<p className="ml-8 text-justify">• Dienstanbieter bezeichnet jede natürliche oder juristische Person, die die Daten im Auftrag des Unternehmens verarbeitet. Dies bezieht sich auf Drittunternehmen oder Einzelpersonen, die vom Unternehmen damit beauftragt werden, den Dienst zu ermöglichen, den Dienst im Auftrag des Unternehmens bereitzustellen, mit dem Dienst verbundene Dienste zu erbringen oder das Unternehmen bei der Analyse der Nutzung des Dienstes zu unterstützen.</p>
<p className="ml-8 text-justify">• Nutzungsdaten beziehen sich auf automatisch erfasste Daten, die entweder durch die Nutzung des Dienstes oder durch die Dienstinfrastruktur selbst generiert werden (beispielsweise die Dauer eines Seitenbesuchs).</p>
<p className="ml-8 text-justify">• Website bezieht sich auf Greek tasty, erreichbar über http://www.greek-tasty.de</p>
<p className="ml-8 text-justify">• „Sie“ bezeichnet die Person, die auf den Dienst zugreift oder ihn nutzt, bzw. das Unternehmen oder eine andere juristische Person, in deren Namen diese Person auf den Dienst zugreift oder ihn nutzt, je nach Fall.</p>
<p className="mt-4 text-black inknut">Erhebung und Verwendung Ihrer personenbezogenen Daten</p>
<p className="mt-4 text-justify">Personenbezogene Daten:</p>
<p className="text-justify">Während Sie unseren Service nutzen, bitten wir Sie möglicherweise, uns bestimmte personenbezogene Daten zur Verfügung zu stellen, die verwendet werden können, um Sie zu kontaktieren oder zu identifizieren. Zu den personenbezogenen Daten können unter anderem gehören:</p>
<p className="ml-8 text-justify">• E-Mail-Adresse</p>
<p className="ml-8 text-justify">• Vor- und Nachname</p>
<p className="ml-8 text-justify">• Telefonnummer</p>
<p className="ml-8 text-justify">• Adresse, Staat, Provinz, Postleitzahl, Stadt</p>
<p className="mt-4 text-justify">Verwendung Ihrer persönlichen Daten:</p>
<p className="text-justify">Das Unternehmen kann personenbezogene Daten für die folgenden Zwecke verwenden:</p>
<p className="ml-8 text-justify">• Zur Bereitstellung und Wartung unseres Dienstes, einschließlich der Überwachung der Nutzung unseres Dienstes.</p>
<p className="ml-8 text-justify">• Zur Verwaltung Ihres Kontos: zur Verwaltung Ihrer Registrierung als Benutzer des Dienstes. Die von Ihnen bereitgestellten personenbezogenen Daten können Ihnen Zugriff auf verschiedene Funktionen des Dienstes gewähren, die Ihnen als registrierter Benutzer zur Verfügung stehen.</p>
<p className="ml-8 text-justify">• Zur Erfüllung eines Vertrags: die Entwicklung, Einhaltung und Durchführung des Kaufvertrags für die von Ihnen erworbenen Produkte, Artikel oder Dienstleistungen oder eines anderen Vertrags mit uns über den Dienst.</p>
<p className="ml-8 text-justify">• Zur Kontaktaufnahme mit Ihnen: Zur Kontaktaufnahme mit Ihnen per E-Mail, Telefonanruf, SMS oder anderen gleichwertigen Formen der elektronischen Kommunikation, wie z. B. Push-Benachrichtigungen einer mobilen Anwendung bezüglich Updates oder informativer Mitteilungen in Bezug auf die Funktionen, Produkte oder vertraglich vereinbarten Dienstleistungen, einschließlich der Sicherheitsupdates, wenn dies für deren Umsetzung erforderlich oder angemessen ist.</p>
<p className="ml-8 text-justify">• Zur Bereitstellung von Neuigkeiten, Sonderangeboten und allgemeinen Informationen über andere von uns angebotene Waren, Dienstleistungen und Veranstaltungen, die denen ähneln, die Sie bereits gekauft oder nach denen Sie sich erkundigt haben, es sei denn, Sie haben sich gegen den Erhalt solcher Informationen entschieden.</p>
<p className="ml-8 text-justify">• Zur Verwaltung Ihrer Anfragen: Zur Bearbeitung und Verwaltung Ihrer Anfragen an uns.</p>
<p className="ml-8 text-justify">• Für Geschäftsübertragungen: Wir können Ihre Informationen verwenden, um eine Fusion, Veräußerung, Umstrukturierung, Reorganisation, Auflösung oder einen sonstigen Verkauf oder eine sonstige Übertragung einiger oder aller unserer Vermögenswerte zu bewerten oder durchzuführen, sei es als fortgeführter Betrieb oder als Teil eines Insolvenz-, Liquidations- oder ähnlichen Verfahrens, bei dem die von uns über unsere Servicenutzer gespeicherten personenbezogenen Daten zu den übertragenen Vermögenswerten gehören.</p>
<p className="ml-8 text-justify">• Für andere Zwecke: Wir können Ihre Informationen für andere Zwecke verwenden, beispielsweise zur Datenanalyse, zur Ermittlung von Nutzungstrends, zur Bestimmung der Wirksamkeit unserer Werbekampagnen und zur Bewertung und Verbesserung unseres Dienstes, unserer Produkte, Dienstleistungen, unseres Marketings und Ihrer Erfahrung.</p>
<p className="mt-4 text-justify">Das Unternehmen kann personenbezogene Daten für die folgenden Zwecke verwenden:</p>
<p className="ml-8 text-justify">• Mit Dienstanbietern: Wir können Ihre personenbezogenen Daten mit Dienstanbietern teilen, um die Nutzung unseres Dienstes zu überwachen und zu analysieren und um mit Ihnen Kontakt aufzunehmen.</p>
<p className="ml-8 text-justify">• Für Geschäftsübertragungen: Wir können Ihre personenbezogenen Daten im Zusammenhang mit oder während der Verhandlungen über eine Fusion, einen Verkauf von Unternehmensvermögen, eine Finanzierung oder den Erwerb unseres gesamten oder eines Teils unseres Geschäfts durch ein anderes Unternehmen teilen oder übertragen.</p>
<p className="ml-8 text-justify">• Mit verbundenen Unternehmen: Wir können Ihre Daten mit unseren verbundenen Unternehmen teilen. In diesem Fall verlangen wir von diesen verbundenen Unternehmen, diese Datenschutzrichtlinie einzuhalten. Zu den verbundenen Unternehmen zählen unsere Muttergesellschaft und alle anderen Tochtergesellschaften, Joint-Venture-Partner oder andere Unternehmen, die von uns kontrolliert werden oder die unter gemeinsamer Kontrolle mit uns stehen.</p>
<p className="ml-8 text-justify">• Mit Geschäftspartnern: Wir können Ihre Daten mit unseren Geschäftspartnern teilen, um Ihnen bestimmte Produkte, Dienstleistungen oder Werbeaktionen anzubieten.</p>
<p className="ml-8 text-justify">• Mit anderen Benutzern: Wenn Sie personenbezogene Daten teilen oder auf andere Weise in den öffentlichen Bereichen mit anderen Benutzern interagieren, können diese Informationen von allen Benutzern angezeigt und öffentlich außerhalb verbreitet werden.</p>
<p className="ml-8 text-justify">• Mit Ihrer Zustimmung: Mit Ihrer Zustimmung können wir Ihre personenbezogenen Daten für jeden anderen Zweck offenlegen.</p>
<p className="mt-4 text-black inknut">Aufbewahrung Ihrer persönlichen Daten</p>
<p className="mt-4 text-justify">Das Unternehmen speichert Ihre personenbezogenen Daten nur so lange, wie dies für die in dieser Datenschutzrichtlinie dargelegten Zwecke erforderlich ist. Wir speichern und verwenden Ihre personenbezogenen Daten in dem Umfang, der erforderlich ist, um unseren gesetzlichen Verpflichtungen nachzukommen (beispielsweise, wenn wir Ihre Daten speichern müssen, um geltende Gesetze einzuhalten), Streitigkeiten beizulegen und unsere rechtlichen Vereinbarungen und Richtlinien durchzusetzen.</p>
<p className="text-justify">Das Unternehmen speichert Nutzungsdaten auch für interne Analysezwecke. Nutzungsdaten werden im Allgemeinen für einen kürzeren Zeitraum gespeichert, es sei denn, diese Daten werden verwendet, um die Sicherheit zu stärken oder die Funktionalität unseres Dienstes zu verbessern, oder wir sind gesetzlich verpflichtet, diese Daten für längere Zeiträume zu speichern.</p>
<p className="mt-4 text-black inknut">Aufbewahrung Ihrer persönlichen Daten</p>
<p className="mt-4 text-justify">Ihre Informationen, einschließlich personenbezogener Daten, werden in den Betriebsbüros des Unternehmens und an allen anderen Orten verarbeitet, an denen sich die an der Verarbeitung beteiligten Parteien befinden. Dies bedeutet, dass diese Informationen an Computer außerhalb Ihres Staates, Ihrer Provinz, Ihres Landes oder einer anderen staatlichen Gerichtsbarkeit, in der möglicherweise andere Datenschutzgesetze gelten als in Ihrer Gerichtsbarkeit, übertragen und dort gespeichert werden können.</p>
<p className="text-justify">Ihre Zustimmung zu dieser Datenschutzrichtlinie und die anschließende Übermittlung dieser Informationen stellen Ihre Zustimmung zu dieser Übertragung dar.</p>
<p className="text-justify">Das Unternehmen wird alle angemessenen Schritte unternehmen, um sicherzustellen, dass Ihre Daten sicher und in Übereinstimmung mit dieser Datenschutzrichtlinie behandelt werden. Es erfolgt keine Übertragung Ihrer personenbezogenen Daten an eine Organisation oder ein Land, sofern keine angemessenen Kontrollen vorhanden sind, einschließlich der Sicherheit Ihrer Daten und anderer personenbezogener Informationen.</p>
<p className="mt-4 text-black inknut">Löschen Ihrer persönlichen Daten</p>
<p className="mt-4 text-justify">Sie haben das Recht, die personenbezogenen Daten, die wir über Sie erhoben haben, zu löschen oder unsere Unterstützung bei der Löschung zu verlangen.</p>
<p className="text-justify">Unser Service bietet Ihnen möglicherweise die Möglichkeit, bestimmte Informationen über Sie innerhalb des Services zu löschen.</p>
<p className="text-justify">Sie können Ihre Informationen jederzeit aktualisieren, ändern oder löschen, indem Sie sich bei Ihrem Konto anmelden (sofern Sie eines haben) und den Abschnitt „Kontoeinstellungen“ aufrufen, in dem Sie Ihre personenbezogenen Daten verwalten können. Sie können sich auch an uns wenden, um Zugriff auf die personenbezogenen Daten zu beantragen, die Sie uns bereitgestellt haben, oder diese zu korrigieren oder zu löschen.</p>
<p className="text-justify">Bitte beachten Sie jedoch, dass wir möglicherweise bestimmte Informationen aufbewahren müssen, wenn wir dazu gesetzlich verpflichtet sind oder eine gesetzliche Grundlage haben.</p>
<p className="mt-4 text-black inknut">Offenlegung Ihrer persönlichen Daten</p>
<p className="mt-4 text-justify">Geschäftstransaktionen:</p>
<p className="text-justify">Wenn das Unternehmen an einer Fusion, Übernahme oder einem Verkauf von Vermögenswerten beteiligt ist, können Ihre personenbezogenen Daten übertragen werden. Wir werden Sie darüber informieren, bevor Ihre personenbezogenen Daten übertragen werden und einer anderen Datenschutzrichtlinie unterliegen.</p>
<p className="mt-4 text-justify">Strafverfolgung:</p>
<p className="text-justify">Unter bestimmten Umständen ist das Unternehmen möglicherweise dazu verpflichtet, Ihre personenbezogenen Daten preiszugeben, wenn dies gesetzlich vorgeschrieben ist oder als Reaktion auf gültige Anfragen von Behörden (z. B. einem Gericht oder einer Regierungsbehörde).</p>
<p className="mt-4 text-justify">Weitere gesetzliche Anforderungen:</p>
<p className="text-justify">Das Unternehmen kann Ihre personenbezogenen Daten in dem guten Glauben offenlegen, dass dies erforderlich ist, um:</p>
<p className="ml-8 text-justify">• Einer gesetzlichen Verpflichtung nachkommen</p>
<p className="ml-8 text-justify">• Die Rechte oder das Eigentum des Unternehmens schützen und verteidigen</p>
<p className="ml-8 text-justify">• Mögliches Fehlverhalten im Zusammenhang mit dem Dienst verhindern oder untersuchen</p>
<p className="ml-8 text-justify">• Die persönliche Sicherheit der Benutzer des Dienstes oder der Öffentlichkeit schützen</p>
<p className="ml-8 text-justify">• Vor gesetzlicher Haftung schützen</p>
<p className="mt-4 text-black inknut">Sicherheit Ihrer persönlichen Daten</p>
<p className="mt-4 text-justify">Die Sicherheit Ihrer persönlichen Daten ist uns wichtig. Bedenken Sie jedoch, dass keine Methode der Übertragung über das Internet oder der elektronischen Speicherung 100 % sicher ist. Obwohl wir uns bemühen, kommerziell akzeptable Mittel zum Schutz Ihrer persönlichen Daten einzusetzen, können wir deren absolute Sicherheit nicht garantieren.</p>
<p className="mt-4 text-black inknut">Datenschutz für Kinder</p>
<p className="mt-4 text-justify">Unser Service richtet sich nicht an Personen unter 13 Jahren. Wir erfassen wissentlich keine personenbezogenen Daten von Personen unter 13 Jahren. Wenn Sie ein Elternteil oder Erziehungsberechtigter sind und wissen, dass Ihr Kind uns personenbezogene Daten bereitgestellt hat, nehmen Sie bitte Kontakt mit uns auf. Wenn uns bekannt wird, dass wir personenbezogene Daten von Personen unter 13 Jahren ohne Überprüfung der elterlichen Zustimmung erfasst haben, ergreifen wir Maßnahmen, um diese Informationen von unseren Servern zu entfernen.
Wenn wir uns auf die Zustimmung als Rechtsgrundlage für die Verarbeitung Ihrer Daten verlassen müssen und in Ihrem Land die Zustimmung eines Elternteils erforderlich ist, benötigen wir möglicherweise die Zustimmung Ihres Elternteils, bevor wir diese Informationen erfassen und verwenden.</p>
<p className="mt-4 text-black inknut">Links zu anderen Websites</p>
<p className="mt-4 text-justify">Unser Service kann Links zu anderen Websites enthalten, die nicht von uns betrieben werden. Wenn Sie auf einen Link eines Drittanbieters klicken, werden Sie auf die Website dieses Drittanbieters weitergeleitet. Wir empfehlen Ihnen dringend, die Datenschutzrichtlinien aller von Ihnen besuchten Websites zu lesen.</p>
<p className="mt-4 text-justify">Wir haben keine Kontrolle über und übernehmen keine Verantwortung für den Inhalt, die Datenschutzrichtlinien oder -praktiken von Websites oder Diensten Dritter.</p>
<p className="mt-4 text-black inknut">Änderungen dieser Datenschutzrichtlinie</p>
<p className="mt-4 text-justify">Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen.</p>
<p className="mt-4 text-justify">Wir werden Sie per E-Mail und/oder durch einen deutlichen Hinweis auf unserem Service informieren, bevor die Änderung wirksam wird, und das Datum „Zuletzt aktualisiert“ oben in dieser Datenschutzrichtlinie aktualisieren.</p>
<p className="mt-4 text-justify">Es wird Ihnen empfohlen, diese Datenschutzrichtlinie regelmäßig auf Änderungen zu überprüfen. Änderungen an dieser Datenschutzrichtlinie werden wirksam, wenn sie auf dieser Seite veröffentlicht werden.</p>
<p className="mt-4 text-black inknut">Kontaktieren Sie uns</p>
<p className="mt-4 text-justify">Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, können Sie uns kontaktieren:</p>
<p className="ml-8 text-justify">• Indem Sie diese Seite auf unserer Website besuchen: https://greek-tasty.de</p>




</header>
  );
}