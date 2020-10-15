require("dotenv").config();

const express = require("express");
const http = require("http");

const app = express();
const connectToDatabase = require("./data/db");
const Note = require("./Note");


