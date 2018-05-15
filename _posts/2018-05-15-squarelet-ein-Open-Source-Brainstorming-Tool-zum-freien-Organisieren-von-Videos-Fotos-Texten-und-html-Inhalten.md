---

layout: post
title: "Wir entwickeln squarelet!"
teaser: "squarelet ist ein Open Source-Tool für das kollaborative & freie Konzeptionieren"
teaser_img_src: /assets/img/blog/2018/Mai/squarelet/squarelet.jpg
featured: true
categories: News
twitter_large_img: /assets/img/blog/2018/Mai/squarelet/squarelet.jpg
image: /assets/img/blog/2018/Mai/squarelet/squarelet.jpg
header_background: /assets/img/blog/2018/Mai/squarelet/squarelet.jpg
header_background_caption: "Bild: Jacob Bøtter. Lizenz: <a href='https://creativecommons.org/licenses/by/2.0/'>CC-BY 2.0</a>"
author: Maximilian Voigt
info_text: |

---
*Es sind bereits viele Tools für das kollaborative Zusammenarbeiten im Netz, einige davon sogar unter freien Lizenzen. Anwendungen wie hackmd.io oder stackedit.io bieten auch die Möglichkeit, nicht nur Texte zu verarbeiten, sondern auch Bilder, Videos und andere html-Formate einzubinden. Allerdings folgen sie alle dem linearen Aufbau eines Textdokumentes.*

Tools wie [freemind](https://freemind.sourceforge.net), Padlet und andere Whiteboard- sowie Brainstorming-Anwendungen haben versucht das zu ändern: Über Content-Boxen können Inhalte recht frei und unabhängig voneinander organisiert werden. Allerdings sind hier Open Source-Lösungen eher die Seltenheit. 

Das wollen wir mit *squarelet* ändern und ein offenes System bauen, für das leicht neue Inhaltstypen entwickelt werden können. Mit squarelet werden sich flexibel Bilder, Videos, Texte und html-Anwendungen organisieren lassen. Auch das Abbilden von Brainstorming-Prozessen wird möglich sein. Damit bleibt viel Raum für das Entwickeln von Ideen und Konzepten, ohne eingegrenzt zu werden. 

In der ersten Förderphase von edulabs (bis Ende August) entwickeln wir mit Feedback aus der Community einen ersten Prototypen, um den Bedarf für neue Features genauer zu ermitteln. Mit einer ersten Version ist bis Mitte Juni zu rechnen. Schneller geht es, wenn sich andere beteiligen. Meldet euch gerne bei uns und arbeitet mit!

## Features
### Basics
* Auf html basierende Inhaltstypen, die das Darstellen von Texten, Videos, Fotos und Embedded-Code-Anwendungen (z.B. H5P) ermöglichen
* Dokumente können durch Links erreicht werden, eine Anmeldung ist nicht erforderlich
* Flexible Lese- und Schreibrechte, die über Accounts organisierbar sind.
* Kollaborativer Zugriff und Synchronisierung des Arbeitszustandes
* Export-Funktion
<br><br>

### Optional

* Zwei Arbeitsflächen: freies Gestaltungsfeld, mit Zoom-Funktion sowie eine Version mit festgelegtem Raster
* Offline-Modus
* Mehrere Download-Möglichkeit: PDF, Instanz-Datei, Markdown
* Individuelle Gestaltung (z.B. Hintergrundbild, Farben)
* Neue Inhaltstypen können leicht erstellt werden (z.B. um Ton- oder Videoaufnahmen vorzunehmen und einzubinden)
* Tags, mit denen die Inhaltstypen versehen werden können und die Möglichkeit diese zu filtern
* Kurzlinks
* Bearbeitungs-History
<br><br><br>

## Du bist Entwickler und möchtest dich beteiligen?
### Der aktuelle Aufbau:

* Browser-Client/Interface: [Vue.js](https://vuejs.org/) (Javascript)
* Authentifikation: [OAuth](https://oauth.net/) 
* Echtzeitkommunikation: [socket.IO](https://socket.io/) (Javascript)
* Backend: Noch unklar, wahrscheinlich auf Python- oder Javascript-Basis
<br><br>

Du hast Erfahrung mit den genannten Paketen und Sprachen oder Ideen für andere Lösungen? Dann melde dich bei uns. 
