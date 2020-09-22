# Ghidul Bobocului FMI

Acest repository conține sursele care generează site-ul cu Ghidul Bobocului, varianta online.

[Eleventy](https://www.11ty.dev/) este folosit pentru a combina template-ul HTML
cu conținutul scris în Markdown.

## Organizare

- `/index.md`: conținutul text al ghidului, scris în Markdown
- `/_includes/`: director care conține template-ul de HTML/CSS pentru layout
- `/_site/`: director temporar în care se generează site-ul final

## Cum contribui?

Trebuie să ai [Node.js](https://nodejs.org/en/) și NPM instalat.

Pentru a instala Eleventy, rulează

```sh
npm install
```

Apoi poți rula

```sh
npm start
```

pentru a avea acces la un server local cu un preview al site-ului.

## Publicare

Modificările pe `master` sunt încărcate automat pe server prin GitHub Actions.

## Licență

Ghidul Bobocului este © 2020 Asociația Studenților la Matematică și Informatică.
