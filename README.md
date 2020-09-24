![CV](https://github.com/ardacetinkaya/json-as-cv/blob/master/CV.png)

# json As CV

This is a simple repository to create CV within just a _*.json_ file. Also it is a good start to learn React, some JavaScript and HTML. 

With a beneficial web application, this could be an solution for **"I want to learn programming but I don’t know where to start"** dilemma and also for your CV.

![CV](https://github.com/ardacetinkaya/json-as-cv/blob/master/CV-UI.png)

<details>
  <summary>Click to see as json</summary>
  
  ## CV.json

```json

{
    "settings": {
        "color": "red"
    },
    "info": {
        "name": "John Doe",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor quis leo et tincidunt. Maecenas consequat, mauris in tristique laoreet, sapien lectus dignissim sapien, nec sodales urna turpis faucibus dolor. Aliquam vulputate turpis vitae turpis sodales ullamcorper. Etiam non accumsan tortor. Aenean sit amet velit eget nibh lobortis condimentum. Mauris laoreet bibendum sollicitudin. Pellentesque mauris lorem, aliquet nec sem eu, porta semper enim. Praesent iaculis elit id enim ultricies, a vestibulum leo mattis. Curabitur eget porta justo. Vestibulum bibendum ac risus in pulvinar. Vivamus fermentum lacus sed eleifend vehicula. Suspendisse tristique ut ligula quis malesuada. Nam placerat augue id sapien dictum iaculis.",
        "email": "someone@mail.com",
        "github": "ardacetinkaya",
        "www": "https://www.minepla.net",
        "linkedin": "https://www.linkedin.com/in/ardacetinkaya/",
        "file": ""
    },
    "experiences": {
        "title": "Experiences",
        "items": [
            {
                "companyName": "Some Company",
                "companyURL": "https://www.google.com",
                "description": [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Duis laoreet mi ut rutrum pharetra.",
                    "Donec at dui egestas, tincidunt enim a, tincidunt eros."
                ],
                "role": "Developer",
                "start": "Feb. 2015",
                "end": "",
                "tags": [
                    "DDD",
                    "SignalR",
                    "Redis",
                    "ITIL"
                ]
            },
            {
                "companyName": "Some Good Company",
                "companyURL": "",
                "description": [
                    "Donec congue arcu et facilisis tincidunt.",
                    "Integer hendrerit nisi id neque blandit egestas eget sit amet nisl.",
                    "Praesent blandit sem nec leo sollicitudin auctor.",
                    "Donec ultricies orci vitae dolor placerat dictum."
                ],
                "role": "Developer",
                "start": "Feb. 2015",
                "end": "Jan. 2010",
                "tags": [
                    "MCV",
                    "ASPNET",
                    "NETFramework"
                ]
            }
        ]
    },
    "educations": {
        "title": "Education",
        "items": [
            {
                "schoolName": "University of Codes",
                "schoolURL": "https://www.google.com",
                "department": "BS, Computer Engineering",
                "start": "Sept. 2006",
                "end": "Jun. 2010"
            }
        ]
    },
    "skills": {
        "title": "Skills",
        "items": [
            {
                "name": "Software Development Principles",
                "score": 80
            },
            {
                "name": "JavaScript",
                "score": 65
            },
            {
                "name": "C#",
                "score": 95
            },
            {
                "name": ".NET Framework",
                "score": 90
            },
            {
                "name": ".NET Core",
                "score": 90
            },
            {
                "name": "GO",
                "score": 30
            },
            {
                "name": "Java",
                "score": 14
            }
        ]
    }
}
```
</details>


## Deploy Your Own CV

Deploy your own json as CV project, along with Serverless Functions, with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/ardacetinkaya/json-as-cv)

_Live Example: https://json-as-cv.vercel.app/_

#### OR


Now within [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) you can also deploy your own json as CV project to Azure
Details: [Quickstart: Building your first static web app](https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript)
