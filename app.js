// npm packages
const chalk = require("chalk");
const yargs = require("yargs");
// External packages

const notes = require("./notes.js");

// Version control

yargs.version("1.1.0");

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Remove a note

yargs.command({
  command: "remove",
  describe: "Removed a note",
  builder: {
    title: {
      describe: "Remove a note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// List all notes

yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    notes.listNotes();
  },
});

// Read a note

yargs.command({
  command: "read",
  describe: "Read a current note",
  builder: {
    title: {
      describe: "Read a note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
