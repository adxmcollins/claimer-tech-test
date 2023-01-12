import { IQuestion } from '../types'

import Sport from '../images/football.png'
import Person from '../images/person-sofa.png'

export const questions: IQuestion[] = [
  {
    "id": "name",
    "title": "What's your name?",
    "subtitle": "Let's get to know each other (in a non-creepy way).",
    "field": {
      "name": "name",
      "id": "name",
      "type": "text",
      "placeholder": "e.g. Erlich Bachman",
      "validation": {
        "regex": null
      }
    },
    "image": Person,
    "displayName": "Your name",
    "displayConditions": null
  },
  {
    "id": "email",
    "title": "What's your email address?",
    "subtitle": "We won't contact you without your consent.",
    "field": {
      "name": "email",
      "id": "email",
      "type": "email",
      "placeholder": "e.g. adam@me.com",
      "validation": {
        "regex": null
      }
    },
    "image": Sport,
    "displayName": "Your email address",
    "displayConditions": {
      questionId: "name",
      equals: null
    }
  },
  {
    "id": "sport",
    "title": "Which sport do you prefer?",
    "subtitle": "If you like all three, just pick any.",
    "field": {
      "name": "sport",
      "id": "sport",
      "type": "radio",
      "choices": [
        {
          "label": "Football",
          "value": "Football"
        },
        {
          "label": "Tennis",
          "value": "Tennis"
        },
        {
          "label": "Formula One",
          "value": "Formula One"
        }
      ],
      "validation": {
        "regex": null
      }
    },
    "image": Person,
    "displayName": "Favourite sport",
    "displayConditions": {
      "questionId": "email",
      "equals": null
    }
  },
  {
    "id": "footballTeam",
    "title": "Which football team do you support?",
    "subtitle": "There is a correct answer, just saying.",
    "field": {
      "name": "footballTeam",
      "id": "footballTeam",
      "type": "text",
      "placeholder": "i.e. Arsenal",
      "validation": {
        "regex": null
      }
    },
    "image": Sport,
    "displayName": "Favourite football team",
    "displayConditions": {
      "questionId": "sport",
      "equals": "Football"
    }
  },
  {
    "id": "tennisPlayer",
    "title": "Who is your favourite tennis player?",
    "subtitle": "Watch your throat if you don't choose Djokovic.",
    "field": {
      "name": "tennisPlayer",
      "id": "tennisPlayer",
      "type": "text",
      "placeholder": "i.e. Andy Murray",
      "validation": {
        "regex": null
      }
    },
    "image": Sport,
    "displayName": "Favourite tennis player",
    "displayConditions": {
      "questionId": "sport",
      "equals": "Tennis"
    }
  },
  {
    "id": "formulaOneTrack",
    "title": "Which of the following is your favourite race track?",
    "subtitle": "Favourite not on the list? Tough, pick one!",
    "field": {
      "name": "formulaOneTrack",
      "id": "formulaOneTrack",
      "type": "radio",
      "choices": [
        {
          "label": "Monaco",
          "value": "Monaco"
        },
        {
          "label": "Spa",
          "value": "Spa"
        },
        {
          "label": "Suzuka",
          "value": "Suzuka"
        },
        {
          "label": "Monza",
          "value": "Monza"
        }
      ],
      "validation": {
        "regex": null
      }
    },
    "image": Sport,
    "displayName": "Favourite F1 track",
    "displayConditions": {
      "questionId": "sport",
      "equals": "Formula One"
    }
  },
  {
    "id": "emailConsent",
    "title": "Can we contact you in future?",
    "subtitle": "Let us know if that's cool. We won't spam you.",
    "field": {
      "name": "emailConsent",
      "id": "emailConsent",
      "type": "radio",
      "choices": [
        {
          "label": "No",
          "value": "No"
        },
        {
          "label": "Yes",
          "value": "Yes"
        }
      ],
      "validation": {
        "regex": null
      }
    },
    "image": Person,
    "displayName": "Email consent",
    "displayConditions": {
      "questionId": [
        'formulaOneTrack',
        'tennisPlayer',
        'footballTeam'
      ],
      "equals": null
    }
  }
]
