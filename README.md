# Gradeful.io

A multi-lingual attendance taking tool for educators in Japan that integrates in-class assessments.

## Project Overview

The project consists of a backend implemented in Nest.js, a server-side, Angular-like framework, and a front-end implemented using the Next.js React framework. The server-side sits in the root folder, while the clients live in the `/client` subfolder.

The remainder of this document refers to the server side implementation. For the front-end, refer to the

## Status

Currently, only the student microservice has been partially implemented, and will add students in the database.

## Backend Installation

Be sure to have Docker and Docker Compose installed.

```bash
$ npm install
$ docker compose build
```

## Running the backend

Teh implemented portion of the backend can be started with

```bash
$ docker compose up people
```

This will spin up several services;

- kafka (and dependencies)
- people (and dependendencies)
- rest-proxy (for API calls)
- student-db

These should succcessfully connect to kafka, and enable the `/students` endpoint.

## Testing the Backend

Once running, you can add students using POST an array of `Student` objects to the `/students` endpoint (on localhost:3000) by default.

The form of the student object is as follows:

```json
{
  "@type": [
    "Student"
  ],
  "attendanceNumber": "1101",
  "givenNames": [
    {
      "annotation": "ガクセイ",
      "nameToken": {
        "en": "Gakusei",
        "ja": "学生"
      }
    }
  ],
  "familyNames": [
    {
      "annotation": "イチ",
      "nameToken": {
        "en": "Ichi",
        "ja": "一"
      }
    }
  ],
}
```

## Known Issues

The `people` microservice fails on startup, with the following message:

```bash
Waiting on broker
wait-for-it.sh: waiting 15 seconds for broker:29092
wait-for-it.sh: timeout occurred after waiting 15 seconds for broker:29092
```

Despite this, the message broker starts as normal, so simply try again:

```bash
$ docker compose up people
```

## Contributors

- Author - Ryan Laboucane
