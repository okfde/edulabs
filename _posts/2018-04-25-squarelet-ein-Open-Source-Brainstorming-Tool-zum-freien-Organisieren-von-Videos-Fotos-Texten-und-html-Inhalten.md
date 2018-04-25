---

layout: post
title: "Wir entwickeln squarelet!"
teaser: "squarelet ist ein Open Source-Tool für das kollaborative & freie Konzeptionieren"
teaser_img_src: /assets/img/blog/2018/April/squarelet/squarelet.jpg
featured: true
categories: News
twitter_large_img: /assets/img/blog/2018/April/squarelet/squarelet.jpg
image: /assets/img/blog/2018/April/squarelet/squarelet.jpg
header_background: /assets/img/blog/2018/April/squarelet/squarelet.jpg
author: Maximilian Voigt
info_text: |

---
*Es sind bereits viele Tools für das kollaborative Zusammenarbeiten im Netz, einige davon sogar unter freien Lizenzen. Anwendungen wie hackmd.io oder stackedit.io bieten auch die Möglichkeit, nicht nur Text zu verarbeiten sondern auch Bilder, Videos und andere html-Formate einzubinden. Allerdings folgen sie alle dem linearen Aufbau eines Textdokumentes.*

Tools wie [freemind](https://freemind.sourceforge.net), Padlet und andere Whiteboard- sowie Brainstorming-Anwendungen haben versucht das zu ändern: Über Content-Boxen können Inhalte recht frei und unabhängig voneinander organisiert werden. Allerdings sind hier Open Source-Lösungen eher die Seltenheit. 

Das wollen wir mit squarelet ändern und ein offenes System entwickeln, für das leicht neue Inhaltstypen entwickelt werden können. Mit squarelet werden sich flexibel Bilder, Videos, Texte und html-Anwendungen organisieren lassen. Auch das Abbilden von Brainstorming-Prozessen wird möglich sein. Damit bleibt viel Raum für das Entwickeln von Ideen und Konzepten, ohne eingegrenzt zu werden. 
Mit einem ersten Prototypen ist bis zum 1.6. zu rechnen. Schneller geht es, wenn sich andere beteiligen. Meldet euch gerne bei uns und arbeitet mit!

## Features
### Basics
* Auf html basierende Inhaltstypen, die das Darstellen von Texten, Videos, Fotos und Embedded-Code-Anwendungen (z.B. H5P) ermöglichen.
* Dokumente können durch Links erreicht werden, eine Anmeldung ist nicht erforderlich.
* Flexible Lese- und Schreibrechte, die über Accounts organisierbar sind.
* kollaborativer Zugriff und Synchronisierung des Arbeitszustandes
* zwei Arbeitsflächen: freies Gestaltungsfeld, mit zoom in und out-Funktion sowie eine Version mit festgelegtem Raster
* offline-Modus
* Download-Möglichkeit: PDF, Instanz-Datei, Markdown
* individuelle Gestaltung (z.B. Hintergrundbild, Farben)
* Neue Inhaltstypen können leicht erstellt werden (z.B. um Ton- oder Videoaufnahmen vorzunehmen und einzubinden).
<br><br>

### Optional

* Tags, mit denen die Inhaltstypen versehen werden können und die Möglichkeit diese zu filtern
* Kurzlinks
* Bearbeitungs-History
<br><br>

## Du bist Entwickler und möchtest dich beteiligen?
Der aktuelle Aufbau wird auf den folgenden Software-Paketen basieren:
* Browser-Client/Interface: [Vue.js](https://vuejs.org/) (Javascript)
* Authentifikation: [OAuth](https://oauth.net/) 
* Echtzeitkommunikation: [socket.IO](https://socket.io/) (Javascript)
* Backend: Noch unklar, wahrscheinlich auf Python- oder Javascript-Basis

Du hast Erfahrung mit den genannten Paketen und Sprachen oder Ideen für andere Lösungen? Dann melde dich bei uns. 
