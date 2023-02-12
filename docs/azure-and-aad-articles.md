## Azure Cloud learning resources

## Labs
- 2022-03-11 [Microsoft Certifications Microsoft Docs](https://docs.microsoft.com/en-us/learn/certifications/)
> Earn certifications that show you are keeping pace with today’s technical roles and requirements. Select a job role to discover certification paths. Github: [Microsoft Learning](https://github.com/MicrosoftLearning)
- 2022-03-11 [AZ500-AzureSecurityTechnologies](https://microsoftlearning.github.io/AZ500-AzureSecurityTechnologies/)
> labs files. Github: [MicrosoftLearning/AZ500-AzureSecurityTechnologies: Microsoft Azure Security Technologies](https://github.com/MicrosoftLearning/AZ500-AzureSecurityTechnologies)


- 2022-03-11 [Azure/azure-quickstart-templates: Azure Quickstart Templates](https://github.com/Azure/azure-quickstart-templates)

## ========== Azure Active Directory ==============

## Good Reads Azure Active Directory

- 2022-02-03 [Azure AD Outage Analysis: December 15, 2021](https://www.thousandeyes.com/blog/azure-ad-outage-analysis-december-15-2021)
> ThousandEyes detected a widespread Azure Active Directory (AD) outage lasting ~1.5 hours from ~00:50 UTC – 2:25 UTC, which may have impacted users around the globe from signing in to Microsoft services like O365. During the outage, authentication requests were returning HTTP 503 service unavailable errors.
- 2022-03-05 [New Azure Active Directory password brute-forcing flaw has no fix Ars Technica](https://arstechnica.com/information-technology/2021/09/new-azure-active-directory-password-brute-forcing-flaw-has-no-fix/)
- 2022-03-16 [Architecture overview - Azure Active Directory Microsoft Docs](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-architecture#data-consistency)
> Azure Active Directory (Azure AD) enables you to securely manage access to Azure services and resources for your users. Included with Azure AD is a full suite of identity management capabilities. For information about Azure AD features, see What is Azure Active Directory?
    Service architecture design
    Primary replica
    Secondary replicas
    Scalability
    Continuous availability
    Fault tolerance
    Data durability
    Data consistency
    Service-level backup

## Good Reads about Authentication Protocols

- 2022-03-01 [Why you probably don't need OAuth2 / OpenID Connect!](https://www.ory.dev/oauth2-openid-connect-do-you-need-use-cases-examples/)
> You probably do not need OAuth2, nor OpenID Connect. This is a controversial opinion, even more so because my biggest professional achievements are two of the most successful open source projects in the OAuth2 and OpenID Connect world


## CSharp Authentication

- 2022-03-06 [Advanced techniques around ASP.NET Core Users and their claims – The Reformed Programmer](https://www.thereformedprogrammer.net/advanced-techniques-around-asp-net-core-users-and-their-claims/?utm_source=csharpdigest&utm_medium=email&utm_campaign=405)
> The AuthP library provides three main extra authorization features to a ASP.NET Core application. They are...
- 2022-02-06 [Authentication in ASP .NET Core - DEV Community](https://dev.to/dotnet/authentication-in-asp-net-core-59k8?utm_source=csharpdigest&utm_medium=email&utm_campaign=401)
> This article covers authentication in ASP .NET Core. It tries to explain the concepts and how they relate and also shows some code so you can hopefully add authentication to your own .NET app.
- 2022-04-03 [Combining Bearer Token and Cookie Authentication in ASP.NET - Rick Strahl's Web Log](https://weblog.west-wind.com/posts/2022/Mar/29/Combining-Bearer-Token-and-Cookie-Auth-in-ASPNET?utm_source=csharpdigest&utm_medium=email&utm_campaign=409)
> And we're back for another episode in the seedy TV drama that is ASP.NET Authentication. In today's show we'll discuss the mysterious case of combining multiple authentication schemes in a single application. Tune in at 11 for the scary conclusion...
>
> In this post I'll talk about:
> - Combining JWT Bearer Token and Cookie Authentication
> - Using Manual JWT Tokens
> - Using Manual Cookies
> - Using only ASP.NET's low level Auth features - not using ASP.NET Core Identity

## Tutorials
- 2022-03-10 [Build a web app that authenticates users and calls web APIs - Microsoft identity platform Microsoft Docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-call-api-overview)
> Learn how to build a web app that signs users in to the Microsoft identity platform, and then calls web APIs on behalf of the signed-in user.

# Azure Active Directory - Random Articles

- 2022-02-25 `aadcloud` [Configure Azure AD authentication - Azure App Service Microsoft Docs](https://docs.microsoft.com/en-us/azure/app-service/configure-authentication-provider-aad)
> This article shows you how to configure authentication for Azure App Service or Azure Functions so that your app signs in users with the Microsoft identity platform (Azure AD) as the authentication provider.
- 2022-01-11 🌤️ [Continuous access evaluation in Azure AD   Microsoft Docs](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/concept-continuous-access-evaluation#enable-or-disable-cae)
-  2022-01-11 🌤️ [aad-app-credential-tools/azuread-application-credential-assessment-powershell-guide.md at main · microsoft/aad-app-credential-tools](https://github.com/microsoft/aad-app-credential-tools/blob/main/azuread/azuread-application-credential-assessment-powershell-guide.md)

# Microsoft Graph Reference Documentation

- 2022-03-04 [Class ContractsConstants.IdentityProperties](https://microsoftgraph.github.io/microsoft-graph-comms-samples/docs/core/Microsoft.Graph.ContractsConstants.IdentityProperties.html)
> Some generated with [DocFX](https://dotnet.github.io/docfx/) MS Graph SDK doc; not bad, but not perfect. Document your source code with comments and get a website for free!
- 2022-02-23 [Microsoft Graph permissions reference - Microsoft Graph Microsoft Docs](https://docs.microsoft.com/en-us/graph/permissions-reference)
> All Microsoft Graph Permissions

# Azure Active Directory Authentication Protocols
> OAuth2.0, OpenID Connect, SAML, JWT

## JWT
JSON Web Token

- 2022-03-01 [Anatomy of a JWT - FusionAuth](https://fusionauth.io/learn/expert-advice/tokens/anatomy-of-jwt)
> Here’s a JSON Web Token, freshly minted. Newlines have been added for clarity, but they are typically not present.
> And overview of JSON Web Token structure

2023-02-05 [Handling JWTs: Understanding Common Pitfalls - Bruce MacDonald, InfraHQ - YouTube](https://www.youtube.com/watch?v=7ybmox6KQ8c)

  > Ensure that the JWT is:
  > - signed with a strong algorithm (e.g. RS256)
  > - not expired
  > - `typ` claim is not set to `None`
  > it is difficult to revoke a JWT, not until it expires.
  > some teams use a block-list of revoked JWTs, but this is not a good solution.

## OAuth 2.0 / OpenID Connect

- 2022-03-10 [The Modern Guide to OAuth - FusionAuth](https://fusionauth.io/learn/expert-advice/oauth/modern-guide-to-oauth)
> I know what you are thinking, is this really another guide to OAuth 2.0?
> Well, yes and no. This guide is different than most of the others out there because it covers all of the ways that we actually use OAuth. It also covers all of the details you need to be an OAuth expert without reading all the specifications or writing your own OAuth server. This document is based on hundreds of conversations and client implementations as well as our experience building FusionAuth, an OAuth server which has been downloaded over a million times.
- 2022-03-13 [An introduction to OpenID Connect in ASP.NET Core](https://andrewlock.net/an-introduction-to-openid-connect-in-asp-net-core/)
> Explains how OpenID Connect works and how it differs from OAuth2.

# AAD SAML

- 2022-02-22 [AD FS 2.0 RelayState Microsoft Docs](https://docs.microsoft.com/en-us/archive/blogs/askds/ad-fs-2-0-relaystate)
> Hi guys, Joji Oshima here again with some great news! AD FS 2.0 Rollup 2 adds the capability to send RelayState when using IDP initiated sign on. I imagine some people are ecstatic to hear this while others are asking “What is this and why should I care?”

# AAD SAML Support - General Articles

- 2022-03-10 [Tutorial: Azure Active Directory single sign-on SSO integration with Azure AD SAML Toolkit Microsoft Docs](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/saml-toolkit-tutorial)
> In this tutorial, you'll learn how to integrate Azure AD SAML Toolkit with Azure Active Directory (Azure AD). When you integrate Azure AD SAML Toolkit with Azure AD, you can:
- Control in Azure AD who has access to Azure AD SAML Toolkit.
- Enable your users to be automatically signed-in to Azure AD SAML Toolkit with their Azure AD accounts.
- Manage your accounts in one central location - the Azure portal.

# Azure Active Directory Service Principals and Managed Identity

- 2022-02-23 [Managed Identity with Azure Automation and Graph API – Stefan Gericke](https://www.gericke.name/managed-identity-with-azure-automation-and-graph-api/)
> This will be a small tutorial how to create the Managed Identity for Azure Automation and how to use this identity for example to connect to Graph API. This will helps you to do administrative tasks with sending request to the API endpoints of Microsoft.
- 2022-02-04 [Apps & service principals in Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals)
    - 2022-02-04 [Single and multi-tenant apps in Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/develop/single-and-multi-tenant-apps)