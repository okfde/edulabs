---

layout: post
title: "Freie Bildungsmaterialien: die Rolle von Tools"
teaser: "Freie und barrierefreie Tools sind ein wichtiger Faktor für die Verbreitung und Weiterentwicklung von OER."
teaser_img_src: /assets/img/static/squarelet.png
featured: false
categories: Abschlussbericht
twitter_large_img: /assets/img/static/squarelet.png
image: /assets/img/static/squarelet.png
header_background: /assets/img/static/squarelet.png
header_background_caption: "Bild: squarelet. Lizenz: <a href='https://creativecommons.org/licenses/by/4.0/'>CC-BY 4.0</a>"
author: edulabs-Team
info_text: |

---
*Die Projektförderung von edulabs ist ausgelaufen, das Netzwerk bleibt aber noch aktiv und die zahlreichen Inhalte dieser Seite werden erhalten. Mit der Artikelreihe „Abschlussbericht“ dokumentiere wir unsere Erkenntnisse. Der vorliegende Beitrag behandelt die Rolle von Tools bei der Entwicklung und Verbreitung von freien Bildungsmaterialien. [Alle weiteren Artikel findet ihr hier.](/blog/#Abschlussbericht)*

Neben den Szenarien, in denen Aktive bei Lab-Treffen oder edusprints gemeinschaftlich an Materialien und Konzepten arbeiten, spielen auch die verwendeten Tools eine Rolle. Wie bereits im Text zu freien und zeitgemäßen Bildungsmaterialien erwähnt gibt es ein paar Bedingungen, die Tools erfüllen müssen, damit das Resultat auch wirklich frei zugänglich ist. Außerdem prägt der technische Rahmen die Möglichkeiten der Zusammenarbeit, Nachnutzbarkeit und individuellen Aufbereitung. Denn besonders "offen" sind die Inhalte dann, wenn die dafür notwendigen Programme selber keine Hürde für die Nutzung darstellen.

### Herausforderungen & Lösungen
Jedes als PDF oder Bilddatei veröffentlichtes und frei lizenziertes Material grundsätzlich bereits ein großer Gewinn, kann es doch jeder und jede nutzen. Häufig ist aber der Einsatz in der Praxis erst nach Anpassungen möglich. Jede Änderung erfordert stets die Projektdatei, mit der am Inhalt gearbeitet werden kann. Bei Texten ist es ein Leichtes, diese Veränderbarkeit zu ermöglichen, handelt es sich um Videos oder grafische Dokumente fällt es schon schwerer - zu verbreitet sind die Anwendungen von proprietären Software-Anbietern wie Adobe, Microsoft oder Apple. Aber auch bei Texten gibt es häufig Schwierigkeiten, die insbesondere durch unterschiedliche Versionen von LibreOffice oder Microsoft verursacht werden. Auch schwer editierbare PDF-Dokumenten sind ein häufiges Problem.

Ein weiterer Aspekt ist das kollaborative Arbeiten, das bei der Erstellung von freien Lern- und Lehrdokumenten eine wesentliche Rolle spielt. Denn sind die Autoren und Autorinnen interdisziplinäre Teams, so verkomplizieren lokal installierte Softwarelösungen den Arbeitsablauf und ziehen das Vorhaben in die Länge.

**Eine Lösung ist Software, die browserbasiert funktioniert**. Damit sind zwei Probleme gelöst: das der Zugänglichkeit sowie der individuellen Anpassbarkeit - denn jeder kann die Dokumente über einen entsprechenden Link erreichen, sofern die Anwendung kostenlos zugänglich ist. Manche Anwendungen erlauben außerdem das Einbinden von bereits frei lizenzierten Medien. Insbesondere für Textanwendungen gibt es hier bereits gute Lösungen; Beispiele hierfür sind Wikis, Hackmd (Open Source nun als [CodiMD](https://github.com/hackmdio/codimd)) und Etherpad.
Bisher ist allerdings die Anwendung von klassischen Microsoft-Produkten und aufwendig anpassbaren PDF-Dokumenten noch sehr verbreitet. Die Herausforderung besteht also darin, Open Source-Lösungen in die Breite zu bringen und die Nutzung von browserbasierten Anwendungen zu fördern.

### Neue Tools befruchten das selbstorganisierte Lernen
Eine weiterer Herausforderung bilden offenen Unterrichtsszenarien, in denen Lernende selbstorganisiert eigene Lernwege beschreiten. Klassische Text-Dokumente sind linear aufgebaut und geben den Arbeitsablauf nacheinander vor. Möchten Lernende ihren individuellen Weg gehen, kann diese Form der Darstellung ein Problem sein. Tools, die eine non-lineare Darstellung ermöglichen, können hier eine Lösung sein. Beispiele hierfür sind die bekannten Dienste Popplet oder Padlet, die eine offene Gestaltungsfläche bereithalten - ähnlich einer Pinnwand, auf der Medien frei angeordnet werden können.

#### Squarelet
Um eine kostenfreie Open Source-Alternative zur Verfügung zu stellen entwickelten wir im Rahmen des edulabs-Projektes Squarelet. Dieses Tool stellt eine digitale Freifläche zur Verfügung, auf der jegliche Web-Inhalte in sogenannten "Squares" gestaltet und frei abgelegt werden können. Anschließend ist es möglich Verbindungen zwischen den “Squares” anzulegen und diese dadurch zu vernetzen. Das ermöglicht das Dokumentieren von diversen Lernwegen, die Lernende ihren Interessen entsprechend verfolgen können. Diese Form des Dokumentierens ist auch als Unterrichtsmethode interessant. Beispielsweise erstellen Lernende gruppenübergreifend eine Karte historischer Ereignisse, die sie anschließend miteinander vernetzen, um Zusammenhänge zu verstehen (Fragestellung: Welche Ereignisse trugen zum Fall der Berliner Mauer bei?). Squarelet ist als Beta-Version mit einfachem Design bereits lokal nutzbar. Auf der Grundlage dieses Prototypen soll in der Fortsetzung des Projekts eine Vollversion entstehen. Mit Open Source-Tools wie [http://scrumblr.ca](http://scrumblr.ca) lassen sich zumindest einige Funktionen des kooperativen Lernens bereits umsetzen.

**Konkrete Plattformen und Tools die neue Arbeitsweisen und selbstorganisiertes Lernen & Lehren ermöglichen**

#### Etherpad
Etherpads sind sehr einfache webbasierter Texteditoren zum kollaborativen Bearbeitung von Texten (collaborative real-time editor). Mit Etherpad können mehrere Personen gleichzeitig ein Textdokument bearbeiten. Alle Änderungen sind sofort bei allen Teilnehmern sichtbar und können farblich unterschieden werden.

Die Open Source Software wird von verschiedenen Initiativen gehostet:
* [Open Knowledge Foundation Deutschland e.V.](https://pad.okfn.de/start)
* [Mozilla Foundation](https://public.etherpad-mozilla.org/)

#### Markdown-Editoren
Im Unterschied zu Etherpad bieten die so genannten Markdown-Editoren mehr Möglichkeiten in den Bereichen Formatierung und Gestaltung. Mit Markdown können Bilder, Filme und weitere Elemente wie Notenschrift, mathematische Formeln, Flussdiagramme, Fußnoten oder interaktive [H5P-Module](https://edulabs.de/blog/H5P-im-Unterricht-Erfahrungen-Ideen) eingebunden werden. Neben dem Bearbeitungsmodus gibt es verschiedene Ansichten - es können schlanke Websites aber auch Präsentationen erstellt, gemeinsam bearbeitet und online geteilt abe rauch exportiert und offline verwaltet werden. Insgesamt bieten die Editoren-Tools eine gute Organisation der Dokumente und ganzer Arbeitsumgebungen.

* **[CodiMD](https://github.com/hackmdio/codimd)**, [vormals hackmd](https://hackmd.io), ist als Open Source verfügbar und kann daher auch auf dem eigenen Server eingebunden werden. Das Tool ist ursprünglich nur in englisch verfügbar. Die Open Knowledge Foundation bietet jedoch auch eine deutsche Version an [https://hackmd.okfn.de](https://hackmd.okfn.de).
* **[Stackedit](https://stackedit.io)** läuft auch in einer offline Version, die automatisch synchronisiert wird. Das Tool ist nur in englisch verfügbar.
* **[CryptPad](https://cryptpad.fr)** erfüllt hohe Sicherheitsanforderungen. Zudem können neben Textdokumenten, Präsentationen auch Umfragen oder Kanban-Boards (To-Do-Listen) angelegt werden. Es gibt sogar die Möglichkeit in der White-Board-Funktion freihand zu malen. Die kostenlose Nutzung ist jedoch auf 50 MB begrenzt.

#### H5P
H5P ist eine Open-Source-Software zum Erstellen von interaktiven Inhalten/Lerninhalten im und für das Internet. Als Alternative für Flash-basierte Anwendungen entwickelte die Norwegian Digital Learning Arena (NDLA) dieses Tool, welches sich HTML5 zunutze macht. Neben interaktiven Videos, Zeitstrahlen und Quizze lassen sich vielfältige Inhalte generieren. Die erstellten Inhalte können einfach in Wordpress und Co. eingebettet werden - mit Hilfe von Plugins oder mit einem [iframe](https://de.wikipedia.org/wiki/Inlineframe). Weitere Infos, Anregungen und konkrete Anleitungen gibt es hier: [https://h5p.org](https://h5p.org)

<p class="link-list">
<span id="toc" class="link-list-headline">Weiterlesen</span>
<a class="external-link" href="/blog/#Abschlussbericht" target="_blank">Alle Beiträge zum Projekt edulabs</a>
</p>