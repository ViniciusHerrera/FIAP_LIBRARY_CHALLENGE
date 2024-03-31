# FIAP - TypeScript Challenge

> Develop a library management system using the latest version of TypeScript. The focus a CRUD (Create, Read, Update, Delete) will be created, which will connect to a database, and can be NaSQL or SQL.

<!-- ### Tweaks and improvements -->

<!-- O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Tarefa 1
- [x] Tarefa 2
- [x] Tarefa 3
- [ ] Tarefa 4
- [ ] Tarefa 5 -->

## 🧬 Functional Requirements

Book management: the objective of your system will be to provide an API that has CRUD functionalities so that a Front-end application can manage this data.

Proposed structure for Book entity: each book can have a title, author, ISBN, year of publication and, if you want to venture out, you can add a Publisher Entity, so a book can be part of a Publisher and a Publisher can have a list of books

## 🔧 Technical Requirements

Project development using the latest version of TypeScript to ensure your code is up to date. System integration with a database that can be NoSQL or SQL. In this scenario, you can use Docker or a free database like PostgreSQL on the Supabase platform.

## 💻 Prerequisites

Before you begin, check that you have met the following requirements:

* You have a `Windows` machine.
* You have a `C# runtime environment`;
* You have installed `Visual Studio 2017/2019, .NET framework 4.5, Sap Connector - v3.0.0.42, Newtonsoft.Json - v1.0.0.0, NLog - 5.0.0.0`.
* You have `Itau Bank API credentials`.
* You have read the following documentation:
  * [Itáu - Dynamic Certificate Generation](https://devportal.itau.com.br/certificado-dinamico).
  * [Itáu - mTLS Authentication Production](https://devportal.itau.com.br/autenticacao-documentacao).
  * [Itáu - Api Cash Management](https://devportal.itau.com.br/nossas-apis/itau-ep9-gtw-sispag-ext).


## 🚀 Installing the Project

To seamlessly set up the ItauApiClient, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the debug folder and acquire the `ItauApiClient.exe` along with its dependencies. Place these files in the designated directory on your server.
3. Update the credentials necessary for accessing the Itau API, SAP, and SQL server. Make the required changes in both `NLog.config` and `ItauApiClient.exe.config` files.
4. Ensure that the `certificate.pfx` is available in the Certificates folder along with other dependencies.
5. Some credentials are provided by the Itau contact point. Reach out to them to obtain the required credentials.

## ☕ Using the Project

To utilize the ItauApiClient, execute the `ItauApiClient.exe`. If you intend to schedule the execution, we recommend utilizing the SQL Server Agent.

## 📫 Contributing to the Project
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
To contribute to the project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Send to the original branch: `git push origin PRO_BR_BIZ_RPA_FIN_APICLIENT_ITAU / <local>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Collaborators

We thank the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ViniciusHerrera">
        <img src="https://github.com/ViniciusHerrera.png" width="100px;" alt="Foto do Vinícius Herrera"/><br>
        <sub>
          <b>Vinícius Herrera</b>
        </sub>
      </a>
    </td>
  </tr>
</table>