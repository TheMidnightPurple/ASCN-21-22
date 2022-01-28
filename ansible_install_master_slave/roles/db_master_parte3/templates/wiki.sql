-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: wiki
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `analytics`
--

DROP TABLE IF EXISTS `analytics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `analytics` (
  `key` varchar(255) NOT NULL,
  `isEnabled` tinyint(1) NOT NULL DEFAULT '0',
  `config` json NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `analytics`
--

LOCK TABLES `analytics` WRITE;
/*!40000 ALTER TABLE `analytics` DISABLE KEYS */;
INSERT INTO `analytics` VALUES ('azureinsights',0,'{\"instrumentationKey\": \"\"}'),('baidutongji',0,'{\"propertyTrackingId\": \"\"}'),('countly',0,'{\"appKey\": \"\", \"serverUrl\": \"\"}'),('elasticapm',0,'{\"serverUrl\": \"http://apm.example.com:8200\", \"environment\": \"\", \"serviceName\": \"wiki-js\"}'),('fathom',0,'{\"host\": \"\", \"siteId\": \"\"}'),('fullstory',0,'{\"org\": \"\"}'),('google',0,'{\"propertyTrackingId\": \"\"}'),('gtm',0,'{\"containerTrackingId\": \"\"}'),('hotjar',0,'{\"siteId\": \"\"}'),('matomo',0,'{\"siteId\": 1, \"serverHost\": \"https://example.matomo.cloud\"}'),('newrelic',0,'{\"appId\": \"\", \"beacon\": \"bam.nr-data.net\", \"licenseKey\": \"\", \"errorBeacon\": \"bam.nr-data.net\"}'),('plausible',0,'{\"domain\": \"\"}'),('statcounter',0,'{\"projectId\": \"\", \"securityToken\": \"\"}'),('yandex',0,'{\"tagNumber\": \"\"}');
/*!40000 ALTER TABLE `analytics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apiKeys`
--

DROP TABLE IF EXISTS `apiKeys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apiKeys` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `key` text NOT NULL,
  `expiration` varchar(255) NOT NULL,
  `isRevoked` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apiKeys`
--

LOCK TABLES `apiKeys` WRITE;
/*!40000 ALTER TABLE `apiKeys` DISABLE KEYS */;
/*!40000 ALTER TABLE `apiKeys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assetData`
--

DROP TABLE IF EXISTS `assetData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assetData` (
  `id` int NOT NULL,
  `data` longblob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assetData`
--

LOCK TABLES `assetData` WRITE;
/*!40000 ALTER TABLE `assetData` DISABLE KEYS */;
/*!40000 ALTER TABLE `assetData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assetFolders`
--

DROP TABLE IF EXISTS `assetFolders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assetFolders` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `parentId` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `assetfolders_parentid_foreign` (`parentId`),
  CONSTRAINT `assetfolders_parentid_foreign` FOREIGN KEY (`parentId`) REFERENCES `assetFolders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assetFolders`
--

LOCK TABLES `assetFolders` WRITE;
/*!40000 ALTER TABLE `assetFolders` DISABLE KEYS */;
/*!40000 ALTER TABLE `assetFolders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `ext` varchar(255) NOT NULL,
  `kind` enum('binary','image') NOT NULL DEFAULT 'binary',
  `mime` varchar(255) NOT NULL DEFAULT 'application/octet-stream',
  `fileSize` int unsigned DEFAULT NULL COMMENT 'In kilobytes',
  `metadata` json DEFAULT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  `folderId` int unsigned DEFAULT NULL,
  `authorId` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `assets_folderid_foreign` (`folderId`),
  KEY `assets_authorid_foreign` (`authorId`),
  CONSTRAINT `assets_authorid_foreign` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`),
  CONSTRAINT `assets_folderid_foreign` FOREIGN KEY (`folderId`) REFERENCES `assetFolders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets`
--

LOCK TABLES `assets` WRITE;
/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authentication`
--

DROP TABLE IF EXISTS `authentication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authentication` (
  `key` varchar(255) NOT NULL,
  `isEnabled` tinyint(1) NOT NULL DEFAULT '0',
  `config` json NOT NULL,
  `selfRegistration` tinyint(1) NOT NULL DEFAULT '0',
  `domainWhitelist` json NOT NULL,
  `autoEnrollGroups` json NOT NULL,
  `order` int unsigned NOT NULL DEFAULT '0',
  `strategyKey` varchar(255) NOT NULL DEFAULT '',
  `displayName` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authentication`
--

LOCK TABLES `authentication` WRITE;
/*!40000 ALTER TABLE `authentication` DISABLE KEYS */;
INSERT INTO `authentication` VALUES ('local',1,'{}',0,'{\"v\": []}','{\"v\": []}',0,'local','Local');
/*!40000 ALTER TABLE `authentication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brute`
--

DROP TABLE IF EXISTS `brute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brute` (
  `key` varchar(255) DEFAULT NULL,
  `firstRequest` bigint DEFAULT NULL,
  `lastRequest` bigint DEFAULT NULL,
  `lifetime` bigint DEFAULT NULL,
  `count` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brute`
--

LOCK TABLES `brute` WRITE;
/*!40000 ALTER TABLE `brute` DISABLE KEYS */;
/*!40000 ALTER TABLE `brute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentProviders`
--

DROP TABLE IF EXISTS `commentProviders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentProviders` (
  `key` varchar(255) NOT NULL,
  `isEnabled` tinyint(1) NOT NULL DEFAULT '0',
  `config` json NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentProviders`
--

LOCK TABLES `commentProviders` WRITE;
/*!40000 ALTER TABLE `commentProviders` DISABLE KEYS */;
INSERT INTO `commentProviders` VALUES ('commento',0,'{\"instanceUrl\": \"https://cdn.commento.io\"}'),('default',1,'{\"akismet\": \"\", \"minDelay\": 30}'),('disqus',0,'{\"accountName\": \"\"}');
/*!40000 ALTER TABLE `commentProviders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  `pageId` int unsigned DEFAULT NULL,
  `authorId` int unsigned DEFAULT NULL,
  `render` text NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `ip` varchar(255) NOT NULL DEFAULT '',
  `replyTo` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `comments_pageid_foreign` (`pageId`),
  KEY `comments_authorid_foreign` (`authorId`),
  CONSTRAINT `comments_authorid_foreign` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`),
  CONSTRAINT `comments_pageid_foreign` FOREIGN KEY (`pageId`) REFERENCES `pages` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editors`
--

DROP TABLE IF EXISTS `editors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editors` (
  `key` varchar(255) NOT NULL,
  `isEnabled` tinyint(1) NOT NULL DEFAULT '0',
  `config` json NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editors`
--

LOCK TABLES `editors` WRITE;
/*!40000 ALTER TABLE `editors` DISABLE KEYS */;
INSERT INTO `editors` VALUES ('api',0,'{}'),('ckeditor',0,'{}'),('code',0,'{}'),('markdown',0,'{}'),('redirect',0,'{}'),('wysiwyg',0,'{}');
/*!40000 ALTER TABLE `editors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `permissions` json NOT NULL,
  `pageRules` json NOT NULL,
  `isSystem` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  `redirectOnLogin` varchar(255) NOT NULL DEFAULT '/',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'Administrators','[\"manage:system\"]','[]',1,'2021-12-25T16:14:39.303Z','2021-12-25T16:14:39.303Z','/'),(2,'Guests','[\"read:pages\", \"read:assets\", \"read:comments\"]','[{\"id\": \"guest\", \"deny\": false, \"path\": \"\", \"match\": \"START\", \"roles\": [\"read:pages\", \"read:assets\", \"read:comments\"], \"locales\": []}]',1,'2021-12-25T16:14:39.309Z','2021-12-25T16:14:39.309Z','/');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locales`
--

DROP TABLE IF EXISTS `locales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locales` (
  `code` varchar(5) NOT NULL,
  `strings` json DEFAULT NULL,
  `isRTL` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL,
  `nativeName` varchar(255) NOT NULL,
  `availability` int NOT NULL DEFAULT '0',
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locales`
--

LOCK TABLES `locales` WRITE;
/*!40000 ALTER TABLE `locales` DISABLE KEYS */;
INSERT INTO `locales` VALUES ('en','{\"auth\": {\"tfa\": {\"title\": \"Two Factor Authentication\", \"subtitle\": \"Security code required:\", \"placeholder\": \"XXXXXX\", \"verifyToken\": \"Verify\"}, \"errors\": {\"loginError\": \"Login error\", \"invalidLogin\": \"Invalid Login\", \"userNotFound\": \"User not found\", \"invalidLoginMsg\": \"The email or password is invalid.\", \"tooManyAttempts\": \"Too many attempts!\", \"invalidUserEmail\": \"Invalid User Email\", \"notYetAuthorized\": \"You have not been authorized to login to this site yet.\", \"tooManyAttemptsMsg\": \"You\'ve made too many failed attempts in a short period of time, please try again {{time}}.\"}, \"fields\": {\"name\": \"Name\", \"email\": \"Email Address\", \"password\": \"Password\", \"username\": \"Username\", \"emailUser\": \"Email / Username\", \"verifyPassword\": \"Verify Password\"}, \"actions\": {\"login\": \"Log In\", \"register\": \"Register\"}, \"changePwd\": {\"loading\": \"Changing password...\", \"proceed\": \"Change Password\", \"subtitle\": \"Choose a new password\", \"instructions\": \"You must choose a new password:\", \"newPasswordPlaceholder\": \"New Password\", \"newPasswordVerifyPlaceholder\": \"Verify New Password\"}, \"providers\": {\"ldap\": \"LDAP / Active Directory\", \"azure\": \"Azure Active Directory\", \"local\": \"Local\", \"slack\": \"Slack\", \"github\": \"GitHub\", \"google\": \"Google ID\", \"facebook\": \"Facebook\", \"windowslive\": \"Microsoft Account\"}, \"signingIn\": \"Signing In...\", \"pleaseWait\": \"Please wait\", \"missingName\": \"Name is missing.\", \"nameTooLong\": \"Name is too long.\", \"registering\": \"Creating account...\", \"genericError\": \"Authentication is unavailable.\", \"invalidEmail\": \"Email address is invalid.\", \"loginSuccess\": \"Login Successful! Redirecting...\", \"missingEmail\": \"Missing email address.\", \"nameTooShort\": \"Name is too short.\", \"tfaFormTitle\": \"Enter the security code generated from your trusted device:\", \"loginRequired\": \"Login required\", \"registerTitle\": \"Create an account\", \"switchToLogin\": {\"link\": \"Login instead\", \"text\": \"Already have an account? {{link}}\"}, \"tfaSetupTitle\": \"Your administrator has required Two-Factor Authentication (2FA) to be enabled on your account.\", \"invalidPassword\": \"Enter a valid password.\", \"missingPassword\": \"Missing password.\", \"registerSuccess\": \"Account created successfully!\", \"enterCredentials\": \"Enter your credentials\", \"passwordNotMatch\": \"Both passwords do not match.\", \"passwordTooShort\": \"Password is too short.\", \"registerSubTitle\": \"Fill-in the form below to create your account.\", \"switchToRegister\": {\"link\": \"Create an account\", \"text\": \"Don\'t have an account yet? {{link}}\"}, \"sendResetPassword\": \"Reset Password\", \"forgotPasswordLink\": \"Forgot your password?\", \"loginUsingStrategy\": \"Login using {{strategy}}\", \"registerCheckEmail\": \"Check your emails to activate your account.\", \"selectAuthProvider\": \"Select Authentication Provider\", \"tfaSetupInstrFirst\": \"1) Scan the QR code below from your mobile 2FA application:\", \"forgotPasswordTitle\": \"Forgot your password\", \"tfaSetupInstrSecond\": \"2) Enter the security code generated from your trusted device:\", \"forgotPasswordCancel\": \"Cancel\", \"invalidEmailUsername\": \"Enter a valid email / username.\", \"orLoginUsingStrategy\": \"or login using...\", \"forgotPasswordLoading\": \"Requesting password reset...\", \"forgotPasswordSuccess\": \"Check your emails for password reset instructions!\", \"forgotPasswordSubtitle\": \"Enter your email address to receive the instructions to reset your password:\"}, \"tags\": {\"locale\": \"Locale\", \"orderBy\": \"Order By\", \"localeAny\": \"Any\", \"noResults\": \"Couldn\'t find any page with the selected tags.\", \"orderByField\": {\"ID\": \"ID\", \"path\": \"Path\", \"title\": \"Title\", \"creationDate\": \"Creation Date\", \"lastModified\": \"Last Modified\"}, \"clearSelection\": \"Clear Selection\", \"pageLastUpdated\": \"Last Updated {{date}}\", \"currentSelection\": \"Current Selection\", \"selectOneMoreTags\": \"Select one or more tags\", \"noResultsWithFilter\": \"Couldn\'t find any page matching the current filtering options.\", \"selectOneMoreTagsHint\": \"Select one or more tags on the left.\", \"retrievingResultsLoading\": \"Retrieving page results...\", \"searchWithinResultsPlaceholder\": \"Search within results...\"}, \"admin\": {\"api\": {\"title\": \"API Access\", \"revoke\": \"Revoke\", \"enabled\": \"API Enabled\", \"disabled\": \"API Disabled\", \"subtitle\": \"Manage keys to access the API\", \"noKeyInfo\": \"No API keys have been generated yet.\", \"headerName\": \"Name\", \"newKeyName\": \"Name\", \"newKeyGroup\": \"Group\", \"newKeyTitle\": \"New API Key\", \"enableButton\": \"Enable API\", \"expiration1y\": \"1 year\", \"expiration3y\": \"3 years\", \"headerRevoke\": \"Revoke\", \"newKeyButton\": \"New API Key\", \"disableButton\": \"Disable API\", \"expiration30d\": \"30 days\", \"expiration90d\": \"90 days\", \"headerCreated\": \"Created\", \"newKeySuccess\": \"API key created successfully.\", \"revokeConfirm\": \"Revoke API Key?\", \"revokeSuccess\": \"The key has been revoked successfully.\", \"expiration180d\": \"180 days\", \"newKeyCopyWarn\": \"Copy the key shown below as {{bold}}\", \"newKeyNameHint\": \"Purpose of this key\", \"refreshSuccess\": \"List of API keys has been refreshed.\", \"headerKeyEnding\": \"Key Ending\", \"newKeyGroupHint\": \"The API key will have the same permissions as the selected group.\", \"newKeyNameError\": \"Name is missing or invalid.\", \"headerExpiration\": \"Expiration\", \"newKeyExpiration\": \"Expiration\", \"newKeyFullAccess\": \"Full Access\", \"newKeyGroupError\": \"You must select a group.\", \"headerLastUpdated\": \"Last Updated\", \"revokeConfirmText\": \"Are you sure you want to revoke key {{name}}? This action cannot be undone!\", \"newKeyCopyWarnBold\": \"it will NOT be shown again\", \"newKeyExpirationHint\": \"You can still revoke a key anytime regardless of the expiration.\", \"newKeyGuestGroupError\": \"The guests group cannot be used for API keys.\", \"newKeyGroupPermissions\": \"or use group permissions...\", \"newKeyPermissionScopes\": \"Permission Scopes\", \"toggleStateEnabledSuccess\": \"API has been enabled successfully.\", \"toggleStateDisabledSuccess\": \"API has been disabled successfully.\"}, \"dev\": {\"flags\": {\"title\": \"Flags\"}, \"title\": \"Developer Tools\", \"voyager\": {\"title\": \"Voyager\"}, \"graphiql\": {\"title\": \"GraphiQL\"}}, \"nav\": {\"site\": \"Site\", \"users\": \"Users\", \"system\": \"System\", \"modules\": \"Modules\"}, \"ssl\": {\"ports\": \"Ports\", \"title\": \"SSL\", \"domain\": \"Domain\", \"status\": \"Certificate Status\", \"httpPort\": \"HTTP Port\", \"provider\": \"Provider\", \"subtitle\": \"Manage SSL configuration\", \"httpsPort\": \"HTTPS Port\", \"domainHint\": \"Enter the fully qualified domain pointing to your wiki. (e.g. wiki.example.com)\", \"expiration\": \"Certificate Expiration\", \"currentState\": \"Current State\", \"httpPortHint\": \"Non-SSL port the server will listen to for HTTP requests. Usually 80 or 3000.\", \"providerHint\": \"Select Custom Certificate if you have your own certificate already.\", \"httpsPortHint\": \"SSL port the server will listen to for HTTPS requests. Usually 443.\", \"providerOptions\": \"Provider Options\", \"subscriberEmail\": \"Subscriber Email\", \"httpPortRedirect\": \"Redirect HTTP requests to HTTPS\", \"providerDisabled\": \"Disabled\", \"renewCertificate\": \"Renew Certificate\", \"providerLetsEncrypt\": \"Let\'s Encrypt\", \"httpPortRedirectHint\": \"Will automatically redirect any requests on the HTTP port to HTTPS.\", \"httpPortRedirectTurnOn\": \"Turn On\", \"httpPortRedirectTurnOff\": \"Turn Off\", \"renewCertificateSuccess\": \"Certificate renewed successfully.\", \"providerCustomCertificate\": \"Custom Certificate\", \"writableConfigFileWarning\": \"Note that your config file must be writable in order to persist ports configuration.\", \"httpPortRedirectSaveSuccess\": \"HTTP Redirection changed successfully.\", \"renewCertificateLoadingTitle\": \"Renewing Certificate...\", \"renewCertificateLoadingSubtitle\": \"Do not leave this page.\"}, \"auth\": {\"title\": \"Authentication\", \"force2fa\": \"Force all users to use Two-Factor Authentication (2FA)\", \"loginUrl\": \"Login URL\", \"security\": \"Security\", \"subtitle\": \"Configure the authentication settings of your wiki\", \"logoutUrl\": \"Logout URL\", \"strategies\": \"Strategies\", \"addStrategy\": \"Add Strategy\", \"callbackUrl\": \"Callback URL / Redirect URI\", \"displayName\": \"Display Name\", \"jwtAudience\": \"JWT Audience\", \"saveSuccess\": \"Authentication configuration saved successfully.\", \"force2faHint\": \"Users will be required to setup 2FA the first time they login and cannot be disabled by the user.\", \"registration\": \"Registration\", \"strategyState\": \"This strategy is {{state}} {{locked}}\", \"refreshSuccess\": \"List of strategies has been refreshed.\", \"configReference\": \"Configuration Reference\", \"displayNameHint\": \"The title shown to the end user for this authentication strategy.\", \"jwtAudienceHint\": \"Audience URN used in JWT issued upon login. Usually your domain name. (e.g. urn:your.domain.com)\", \"siteUrlNotSetup\": \"You must set a valid {{siteUrl}} first! Click on {{general}} in the left sidebar.\", \"tokenExpiration\": \"Token Expiration\", \"activeStrategies\": \"Active Strategies\", \"autoEnrollGroups\": \"Assign to group\", \"domainsWhitelist\": \"Limit to specific email domains\", \"selfRegistration\": \"Allow self-registration\", \"allowedWebOrigins\": \"Allowed Web Origins\", \"globalAdvSettings\": \"Global Advanced Settings\", \"strategyIsEnabled\": \"Active\", \"tokenRenewalPeriod\": \"Token Renewal Period\", \"strategyStateActive\": \"active\", \"strategyStateLocked\": \"and cannot be disabled.\", \"tokenExpirationHint\": \"The expiration period of a token until it must be renewed. (default: 30m)\", \"autoEnrollGroupsHint\": \"Automatically assign new users to these groups.\", \"domainsWhitelistHint\": \"A list of domains authorized to register. The user email address domain must match one of these to gain access.\", \"selfRegistrationHint\": \"Allow any user successfully authorized by the strategy to access the wiki.\", \"strategyConfiguration\": \"Strategy Configuration\", \"strategyIsEnabledHint\": \"Are users able to login using this strategy?\", \"strategyStateInactive\": \"not active\", \"tokenRenewalPeriodHint\": \"The maximum period a token can be renewed when expired. (default: 14d)\", \"configReferenceSubtitle\": \"Some strategies may require some configuration values to be set on your provider. These are provided for reference only and may not be needed by the current strategy.\", \"strategyNoConfiguration\": \"This strategy has no configuration options you can modify.\", \"tokenEndpointAuthMethod\": \"Token Endpoint Authentication Method\"}, \"mail\": {\"dkim\": \"DKIM (optional)\", \"smtp\": \"SMTP Settings\", \"test\": \"Send a test email\", \"title\": \"Mail\", \"sender\": \"Sender\", \"dkimUse\": \"Use DKIM\", \"smtpPwd\": \"Password\", \"smtpTLS\": \"Secure (TLS)\", \"dkimHint\": \"DKIM (DomainKeys Identified Mail) provides a layer of security on all emails sent from Wiki.js by providing the means for recipients to validate the domain name and ensure the message authenticity.\", \"smtpHost\": \"Host\", \"smtpPort\": \"Port\", \"smtpUser\": \"Username\", \"subtitle\": \"Configure mail settings\", \"testHint\": \"Send a test email to ensure your SMTP configuration is working.\", \"testSend\": \"Send Email\", \"senderName\": \"Sender Name\", \"saveSuccess\": \"Configuration saved successfully.\", \"senderEmail\": \"Sender Email\", \"smtpTLSHint\": \"Should be enabled when using port 465, otherwise turned off (587 or 25).\", \"smtpPortHint\": \"Usually 465 (recommended), 587 or 25.\", \"configuration\": \"Configuration\", \"smtpVerifySSL\": \"Verify SSL Certificate\", \"testRecipient\": \"Recipient Email Address\", \"dkimDomainName\": \"Domain Name\", \"dkimPrivateKey\": \"Private Key\", \"dkimKeySelector\": \"Key Selector\", \"sendTestSuccess\": \"A test email was sent successfully.\", \"smtpVerifySSLHint\": \"Some hosts requires SSL certificate checking to be disabled. Leave enabled for proper security.\", \"dkimPrivateKeyHint\": \"Private key for the selector in PEM format\"}, \"tags\": {\"tag\": \"Tag\", \"date\": \"Created {{created}} and last updated {{updated}}.\", \"edit\": \"Edit Tag\", \"label\": \"Label\", \"title\": \"Tags\", \"delete\": \"Delete this tag\", \"filter\": \"Filter...\", \"subtitle\": \"Manage page tags\", \"emptyList\": \"No tags to display.\", \"noItemsText\": \"Add a tag to a page to get started.\", \"saveSuccess\": \"Tag has been saved successfully.\", \"deleteConfirm\": \"Delete Tag?\", \"deleteSuccess\": \"Tag deleted successfully.\", \"refreshSuccess\": \"Tags have been refreshed.\", \"noSelectionText\": \"Select a tag from the list on the left.\", \"viewLinkedPages\": \"View Linked Pages\", \"deleteConfirmText\": \"Are you sure you want to delete tag {{tag}}? The tag will also be unlinked from all pages.\"}, \"pages\": {\"title\": \"Pages\"}, \"stats\": {\"title\": \"Statistics\"}, \"theme\": {\"title\": \"Theme\", \"iconset\": \"Icon Set\", \"options\": \"Theme Options\", \"darkMode\": \"Dark Mode\", \"subtitle\": \"Modify the look & feel of your wiki\", \"siteTheme\": \"Site Theme\", \"cssOverride\": \"CSS Override\", \"iconsetHint\": \"Set of icons to use for the sidebar navigation.\", \"darkModeHint\": \"Not recommended for accessibility. May not be supported by all themes.\", \"downloadName\": \"Name\", \"codeInjection\": \"Code Injection\", \"siteThemeHint\": \"Themes affect how content pages are displayed. Other site sections (such as the editor or admin area) are not affected.\", \"downloadAuthor\": \"Author\", \"downloadThemes\": \"Download Themes\", \"cssOverrideHint\": \"CSS code to inject after system default CSS. Consider using custom themes if you have a large amount of css code. Injecting too much CSS code will result in poor page load performance! CSS will automatically be minified.\", \"downloadDownload\": \"Download\", \"bodyHtmlInjection\": \"Body HTML Injection\", \"headHtmlInjection\": \"Head HTML Injection\", \"cssOverrideWarning\": \"{{caution}} When adding styles for page content, you must scope them to the {{cssClass}} class. Omitting this could break the layout of the editor!\", \"bodyHtmlInjectionHint\": \"HTML code to be injected just before the closing body tag.\", \"headHtmlInjectionHint\": \"HTML code to be injected just before the closing head tag. Usually for script tags.\", \"cssOverrideWarningCaution\": \"CAUTION:\"}, \"users\": {\"id\": \"ID {{id}}\", \"tfa\": \"Two Factor Authentication (2FA)\", \"edit\": \"Edit User\", \"email\": \"Email\", \"title\": \"Users\", \"active\": \"Active\", \"groups\": \"User Groups\", \"inactive\": \"Inactive\", \"jobTitle\": \"Job Title\", \"location\": \"Location\", \"password\": \"Password\", \"timezone\": \"Timezone\", \"verified\": \"Verified\", \"basicInfo\": \"Basic Info\", \"toggle2FA\": \"Toggle 2FA\", \"unverified\": \"Unverified\", \"updateUser\": \"Update User\", \"displayName\": \"Display Name\", \"groupAssign\": \"Assign\", \"newPassword\": \"New Password\", \"selectGroup\": \"Select Group...\", \"authProvider\": \"Provider\", \"authProviderId\": \"Provider Id\", \"authentication\": \"Authentication\", \"changePassword\": \"Change Password\", \"noGroupAssigned\": \"This user is not assigned to any group yet. You must assign at least 1 group to a user.\", \"extendedMetadata\": \"Extended Metadata\", \"deleteConfirmText\": \"Are you sure you want to delete user {{username}}?\", \"groupAssignNotice\": \"Note that you cannot assign users to the Administrators or Guests groups from this panel.\", \"userUpdateSuccess\": \"User updated successfully.\", \"userVerifySuccess\": \"User has been verified successfully.\", \"deleteConfirmTitle\": \"Delete User?\", \"userActivateSuccess\": \"User has been activated successfully.\", \"userTFAEnableSuccess\": \"2FA was enabled successfully.\", \"userDeactivateSuccess\": \"User deactivated successfully.\", \"userTFADisableSuccess\": \"2FA was disabled successfully.\", \"deleteConfirmReplaceWarn\": \"Any content (pages, uploads, comments, etc.) that was created by this user will be reassigned to the user selected below. It is recommended to create a dummy target user (e.g. Deleted User) if you don\'t want the content to be reassigned to any current active user.\", \"deleteConfirmForeignNotice\": \"Note that you cannot delete a user that already created content. You must instead either deactivate the user or delete all content that was created by that user.\", \"userAlreadyAssignedToGroup\": \"User is already assigned to this group!\"}, \"editor\": {\"title\": \"Editor\"}, \"groups\": {\"title\": \"Groups\"}, \"locale\": {\"rtl\": \"RTL\", \"base\": {\"hint\": \"All UI text elements will be displayed in selected language.\", \"label\": \"Site Locale\", \"labelWithNS\": \"Base Locale\"}, \"code\": \"Code\", \"name\": \"Name\", \"title\": \"Locale\", \"download\": \"Download\", \"settings\": \"Locale Settings\", \"sideload\": \"Sideload Locale Package\", \"subtitle\": \"Set localization options for your wiki\", \"autoUpdate\": {\"hint\": \"Automatically download updates to this locale as they become available.\", \"label\": \"Update Automatically\", \"hintWithNS\": \"Automatically download updates to all namespaced locales enabled below.\"}, \"namespaces\": {\"hint\": \"Enables multiple language versions of the same page.\", \"label\": \"Multilingual Namespaces\"}, \"nativeName\": \"Native Name\", \"namespacing\": \"Multilingual Namespacing\", \"availability\": \"Availability\", \"sideloadHelp\": \"If you are not connected to the internet or cannot download locale files using the method above, you can instead sideload packages manually by uploading them below.\", \"downloadTitle\": \"Download Locale\", \"activeNamespaces\": {\"hint\": \"List of locales enabled for multilingual namespacing. The base locale defined above will always be included regardless of this selection.\", \"label\": \"Active Namespaces\"}, \"namespacingPrefixWarning\": {\"title\": \"The locale code will be prefixed to all paths. (e.g. /{{langCode}}/page-name)\", \"subtitle\": \"Paths without a locale code will be automatically redirected to the base locale defined above.\"}}, \"search\": {\"title\": \"Search Engine\", \"subtitle\": \"Configure the search capabilities of your wiki\", \"engineConfig\": \"Engine Configuration\", \"rebuildIndex\": \"Rebuild Index\", \"searchEngine\": \"Search Engine\", \"engineNoConfig\": \"This engine has no configuration options you can modify.\", \"configSaveSuccess\": \"Search engine configuration saved successfully.\", \"listRefreshSuccess\": \"List of search engines has been refreshed.\", \"indexRebuildSuccess\": \"Index rebuilt successfully.\"}, \"system\": {\"os\": \"Operating System\", \"title\": \"System Info\", \"cpuCores\": \"CPU Cores\", \"hostInfo\": \"Host Information\", \"hostname\": \"Hostname\", \"ramUsage\": \"RAM Usage: {{used}} / {{total}}\", \"subtitle\": \"Information about your system\", \"totalRAM\": \"Total RAM\", \"published\": \"Published\", \"configFile\": \"Configuration File\", \"latestVersion\": \"Latest Version\", \"currentVersion\": \"Current Version\", \"refreshSuccess\": \"System Info has been refreshed.\", \"dbPartialSupport\": \"Your database version is not fully supported. Some functionality may be limited or not work as expected.\", \"workingDirectory\": \"Working Directory\"}, \"general\": {\"logo\": \"Logo\", \"title\": \"General\", \"general\": \"General\", \"logoUrl\": \"Logo URL\", \"siteUrl\": \"Site URL\", \"siteInfo\": \"Site Info\", \"subtitle\": \"Main settings of your wiki\", \"siteTitle\": \"Site Title\", \"metaRobots\": \"Meta Robots\", \"uploadLogo\": \"Upload Logo\", \"companyName\": \"Company / Organization Name\", \"logoUrlHint\": \"Specify an image to use as the logo. SVG, PNG, JPG are supported, in a square ratio, 34x34 pixels or larger. Click the button on the right to upload a new image.\", \"saveSuccess\": \"Site configuration saved successfully.\", \"siteUrlHint\": \"Full URL to your wiki, without the trailing slash. (e.g. https://wiki.example.com)\", \"uploadClear\": \"Clear\", \"siteBranding\": \"Site Branding\", \"siteTitleHint\": \"Displayed in the top bar and appended to all pages meta title.\", \"contentLicense\": \"Content License\", \"metaRobotsHint\": \"Default: Index, Follow. Can also be set on a per-page basis.\", \"uploadSizeHint\": \"An image of {{size}} pixels is recommended for best results.\", \"companyNameHint\": \"Name to use when displaying copyright notice in the footer. Leave empty to hide.\", \"footerCopyright\": \"Footer Copyright\", \"siteDescription\": \"Site Description\", \"uploadTypesHint\": \"{{typeList}} or {{lastType}} files only\", \"contentLicenseHint\": \"License shown in the footer of all content pages.\", \"siteDescriptionHint\": \"Default description when none is provided for a page.\", \"siteTitleInvalidChars\": \"Site Title contains invalid characters.\"}, \"logging\": {\"title\": \"Logging\"}, \"storage\": {\"title\": \"Storage\", \"status\": \"Status\", \"actions\": \"Actions\", \"targets\": \"Targets\", \"errorMsg\": \"Error Message\", \"lastSync\": \"Last synchronization {{time}}\", \"noTarget\": \"You don\'t have any active storage target.\", \"subtitle\": \"Set backup and sync targets for your content\", \"actionRun\": \"Run\", \"syncDirBi\": \"Bi-directional\", \"syncDirPull\": \"Pull from target\", \"syncDirPush\": \"Push to target\", \"targetState\": \"This storage target is {{state}}\", \"unsupported\": \"Unsupported\", \"syncSchedule\": \"Sync Schedule\", \"targetConfig\": \"Target Configuration\", \"syncDirBiHint\": \"In bi-directional mode, content is first pulled from the storage target. Any newer content overwrites local content. New content since last sync is then pushed to the storage target, overwriting any content on target if present.\", \"syncDirection\": \"Sync Direction\", \"noConfigOption\": \"This storage target has no configuration options you can modify.\", \"lastSyncAttempt\": \"Last attempt was {{time}}\", \"syncDirPullHint\": \"Content is always pulled from the storage target, overwriting any local content which already exists. This choice is usually reserved for single-use content import. Caution with this option as any local content will always be overwritten!\", \"syncDirPushHint\": \"Content is always pushed to the storage target, overwriting any existing content. This is safest choice for backup scenarios.\", \"syncScheduleHint\": \"For performance reasons, this storage target synchronize changes on an interval-based schedule, instead of on every change. Define at which interval should the synchronization occur.\", \"targetStateActive\": \"active\", \"actionsInactiveWarn\": \"You must enable this storage target and apply changes before you can run actions.\", \"syncScheduleCurrent\": \"Currently set to every {{schedule}}.\", \"syncScheduleDefault\": \"The default is every {{schedule}}.\", \"targetStateInactive\": \"inactive\", \"syncDirectionSubtitle\": \"Choose how content synchronization is handled for this storage target.\"}, \"comments\": {\"title\": \"Comments\", \"provider\": \"Provider\", \"subtitle\": \"Add discussions to your wiki pages\", \"providerConfig\": \"Provider Configuration\", \"providerNoConfig\": \"This provider has no configuration options you can modify.\"}, \"security\": {\"jwt\": \"JWT Configuration\", \"login\": \"Login\", \"title\": \"Security\", \"uploads\": \"Uploads\", \"subtitle\": \"Configure security settings\", \"enforce2fa\": \"Enforce 2FA\", \"loginBgUrl\": \"Login Background Image URL\", \"bypassLogin\": \"Bypass Login Screen\", \"loginScreen\": \"Login Screen\", \"uploadsInfo\": \"These settings only affect Wiki.js. If you\'re using a reverse-proxy (e.g. nginx, apache, Cloudflare), you must also change its settings to match.\", \"loginSecurity\": \"Security\", \"maxUploadSize\": \"Max Upload Size\", \"enforce2faHint\": \"Force all users to use Two-Factor Authentication when using an authentication provider with a user / password form.\", \"hideLocalLogin\": \"Hide Local Authentication Provider\", \"loginBgUrlHint\": \"Specify an image to use as the login background. PNG and JPG are supported, 1920x1080 recommended. Leave empty for default. Click the button on the right to upload a new image. Note that the Guests group must have read-access to the selected image!\", \"maxUploadBatch\": \"Max Files per Upload\", \"bypassLoginHint\": \"Should the user be redirected automatically to the first authentication provider.\", \"maxUploadSizeHint\": \"The maximum size for a single file.\", \"hideLocalLoginHint\": \"Don\'t show the local authentication provider on the login screen. Add ?all to the URL to temporarily use it.\", \"maxUploadBatchHint\": \"How many files can be uploaded in a single batch?\", \"maxUploadSizeSuffix\": \"bytes\", \"maxUploadBatchSuffix\": \"files\"}, \"webhooks\": {\"title\": \"Webhooks\", \"subtitle\": \"Manage webhooks to external services\"}, \"adminArea\": \"Administration Area\", \"analytics\": {\"title\": \"Analytics\", \"subtitle\": \"Add analytics and tracking tools to your wiki\", \"providers\": \"Providers\", \"saveSuccess\": \"Analytics configuration saved successfully\", \"refreshSuccess\": \"List of providers refreshed successfully.\", \"providerConfiguration\": \"Provider Configuration\", \"providerNoConfiguration\": \"This provider has no configuration options you can modify.\"}, \"dashboard\": {\"pages\": \"Pages\", \"title\": \"Dashboard\", \"users\": \"Users\", \"groups\": \"Groups\", \"subtitle\": \"Wiki.js\", \"lastLogins\": \"Last Logins\", \"versionNew\": \"A new version is available: {{version}}\", \"recentPages\": \"Recent Pages\", \"versionLatest\": \"You are running the latest version.\", \"contributeHelp\": \"We need your help!\", \"mostPopularPages\": \"Most Popular Pages\", \"contributeSubtitle\": \"Wiki.js is a free and open source project. There are several ways you can contribute to the project.\", \"contributeLearnMore\": \"Learn More\"}, \"rendering\": {\"title\": \"Rendering\", \"subtitle\": \"Configure the page rendering pipeline\"}, \"utilities\": {\"title\": \"Utilities\", \"tools\": \"Tools\", \"subtitle\": \"Maintenance and miscellaneous tools\", \"authTitle\": \"Authentication\", \"cacheTitle\": \"Flush Cache\", \"authSubtitle\": \"Various tools for authentication / users\", \"contentTitle\": \"Content\", \"cacheSubtitle\": \"Flush cache of various components\", \"importv1Title\": \"Import from Wiki.js 1.x\", \"telemetryTitle\": \"Telemetry\", \"contentSubtitle\": \"Various tools for pages\", \"importv1Subtitle\": \"Migrate data from a previous 1.x installation\", \"telemetrySubtitle\": \"Enable/Disable telemetry or reset the client ID\", \"graphEndpointTitle\": \"GraphQL Endpoint\", \"graphEndpointSubtitle\": \"Change the GraphQL endpoint for Wiki.js\"}, \"contribute\": {\"shop\": \"Wiki.js Shop\", \"title\": \"Contribute to Wiki.js\", \"github\": \"Become a sponsor via GitHub Sponsors (goes directly into supporting lead developer Nicolas Giard\'s goal of working full-time on Wiki.js)\", \"paypal\": \"Make a one-time or recurring donation via Paypal:\", \"patreon\": \"Become a backer or sponsor via Patreon (goes directly into supporting lead developer Nicolas Giard\'s goal of working full-time on Wiki.js)\", \"tshirts\": \"You can also buy Wiki.js t-shirts to support the project financially:\", \"ethereum\": \"We accept donations using Ethereum:\", \"subtitle\": \"Help support Wiki.js development and operations\", \"foundABug\": \"Found a bug? Submit an issue on {{0}}.\", \"contribute\": \"Contribute\", \"openSource\": \"Wiki.js is a free and open-source software brought to you with {{0}} by {{1}} and {{2}}.\", \"fundOurWork\": \"Fund our work\", \"needYourHelp\": \"We need your help to keep improving the software and run the various associated services (e.g. hosting and networking).\", \"submitAnIdea\": \"Submit an idea or vote on a proposed one on the {{0}}.\", \"becomeAPatron\": \"Become a Patron\", \"helpTranslate\": \"Help translate Wiki.js in your language. Let us know on {{0}}.\", \"makeADonation\": \"Make a donation\", \"spreadTheWord\": \"Spread the word\", \"talkToFriends\": \"Talk to your friends and colleagues about how awesome Wiki.js is!\", \"becomeASponsor\": \"Become a Sponsor\", \"openCollective\": \"Wiki.js is also part of the Open Collective initiative, a transparent fund that goes toward community resources. You can contribute financially by making a monthly or one-time donation:\", \"submitAnIdeaLink\": \"feature requests board\", \"followUsOnTwitter\": \"Follow us on {{0}}.\", \"openSourceContributors\": \"contributors\"}, \"extensions\": {\"title\": \"Extensions\", \"subtitle\": \"Install extensions for extra functionality\"}, \"navigation\": {\"edit\": \"Edit {{kind}}\", \"icon\": \"Icon\", \"link\": \"Link\", \"mode\": \"Navigation Mode\", \"label\": \"Label\", \"title\": \"Navigation\", \"delete\": \"Delete {{kind}}\", \"header\": \"Header\", \"target\": \"Target\", \"divider\": \"Divider\", \"navType\": {\"home\": \"Home\", \"page\": \"Page\", \"external\": \"External Link\", \"searchQuery\": \"Search Query\", \"externalblank\": \"External Link (New Window)\"}, \"modeNone\": {\"title\": \"None\", \"description\": \"Disable Site Navigation\"}, \"subtitle\": \"Manage the site navigation\", \"untitled\": \"Untitled {{kind}}\", \"emptyList\": \"Navigation is empty\", \"modeCustom\": {\"title\": \"Custom Navigation\", \"description\": \"Static Navigation Menu + Site Tree Button\"}, \"modeStatic\": {\"title\": \"Static Navigation\", \"description\": \"Static Navigation Menu Only\"}, \"targetType\": \"Target Type\", \"noItemsText\": \"Click the Add button to add your first navigation item.\", \"saveSuccess\": \"Navigation saved successfully.\", \"modeSiteTree\": {\"title\": \"Site Tree\", \"description\": \"Classic Tree-based Navigation\"}, \"sourceLocale\": \"Source Locale\", \"copyFromLocale\": \"Copy from locale...\", \"visibilityMode\": {\"all\": \"Visible to everyone\", \"restricted\": \"Visible to select groups...\"}, \"noSelectionText\": \"Select a navigation item on the left.\", \"selectPageButton\": \"Select Page...\", \"sourceLocaleHint\": \"The locale from which navigation items will be copied from.\", \"copyFromLocaleInfoText\": \"Select the locale from which items will be copied from. Items will be appended to the current list of items in the active locale.\"}}, \"common\": {\"page\": {\"id\": \"ID {{id}}\", \"toc\": \"Page Contents\", \"tags\": \"Tags\", \"share\": \"Share\", \"delete\": \"Delete Page\", \"global\": \"Global\", \"convert\": \"Convert Page\", \"loading\": \"Loading Page...\", \"private\": \"Private\", \"bookmark\": \"Bookmark\", \"editPage\": \"Edit Page\", \"published\": \"Published\", \"versionId\": \"Version ID {{id}}\", \"deleteTitle\": \"Are you sure you want to delete page {{title}}?\", \"printFormat\": \"Print Format\", \"unpublished\": \"Unpublished\", \"convertTitle\": \"Select the editor you want to use going forward for the page {{title}}:\", \"lastEditedBy\": \"Last edited by\", \"tagsMatching\": \"Pages matching tags\", \"viewingSource\": \"Viewing source of page {{path}}\", \"deleteSubtitle\": \"The page can be restored from the administration area.\", \"convertSubtitle\": \"The page content will be converted into the format of the newly selected editor. Note that some formatting or non-rendered content may be lost as a result of the conversion. A snapshot will be added to the page history and can be restored at any time.\", \"returnNormalView\": \"Return to Normal View\", \"unpublishedWarning\": \"This page is not published.\", \"viewingSourceVersion\": \"Viewing source as of {{date}} of page {{path}}\"}, \"user\": {\"search\": \"Search User\", \"searchPlaceholder\": \"Search Users...\"}, \"error\": {\"unexpected\": \"An unexpected error occurred.\"}, \"footer\": {\"license\": \"Content is available under the {{license}}, by {{company}}.\", \"copyright\": \"© {{year}} {{company}}. All rights reserved.\", \"poweredBy\": \"Powered by\"}, \"header\": {\"edit\": \"Edit\", \"home\": \"Home\", \"move\": \"Move / Rename\", \"view\": \"View\", \"admin\": \"Administration\", \"login\": \"Login\", \"assets\": \"Assets\", \"delete\": \"Delete\", \"logout\": \"Logout\", \"myWiki\": \"My Wiki\", \"search\": \"Search...\", \"account\": \"Account\", \"convert\": \"Convert\", \"history\": \"History\", \"newPage\": \"New Page\", \"profile\": \"Profile\", \"siteMap\": \"Site Map\", \"language\": \"Language\", \"duplicate\": \"Duplicate\", \"browseTags\": \"Browse by Tags\", \"searchHint\": \"Type at least 2 characters to start searching...\", \"viewSource\": \"View Source\", \"currentPage\": \"Current Page\", \"imagesFiles\": \"Images & Files\", \"pageActions\": \"Page Actions\", \"searchClose\": \"Close\", \"searchLoading\": \"Searching...\", \"searchCopyLink\": \"Copy Search Link\", \"searchNoResult\": \"No pages matching your query.\", \"searchDidYouMean\": \"Did you mean...\", \"searchResultsCount\": \"Found {{total}} results\"}, \"actions\": {\"ok\": \"OK\", \"add\": \"Add\", \"copy\": \"Copy\", \"edit\": \"Edit\", \"exit\": \"Exit\", \"move\": \"Move\", \"page\": \"Page\", \"save\": \"Save\", \"apply\": \"Apply\", \"clear\": \"Clear\", \"close\": \"Close\", \"fetch\": \"Fetch\", \"browse\": \"Browse...\", \"cancel\": \"Cancel\", \"create\": \"Create\", \"delete\": \"Delete\", \"insert\": \"Insert\", \"rename\": \"Rename\", \"select\": \"Select\", \"upload\": \"Upload\", \"confirm\": \"Confirm\", \"convert\": \"Convert\", \"discard\": \"Discard\", \"preview\": \"Preview\", \"proceed\": \"Proceed\", \"refresh\": \"Refresh\", \"download\": \"Download\", \"generate\": \"Generate\", \"optimize\": \"Optimize\", \"properties\": \"Properties\", \"returnToTop\": \"Return to top\", \"saveChanges\": \"Save Changes\", \"discardChanges\": \"Discard Changes\"}, \"license\": {\"alr\": \"All Rights Reserved\", \"cc0\": \"Public Domain\", \"ccby\": \" Creative Commons Attribution License\", \"none\": \"None\", \"ccbync\": \"Creative Commons Attribution-NonCommercial License\", \"ccbynd\": \"Creative Commons Attribution-NoDerivs License\", \"ccbysa\": \"Creative Commons Attribution-ShareAlike License\", \"ccbyncnd\": \"Creative Commons Attribution-NonCommercial-NoDerivs License\", \"ccbyncsa\": \"Creative Commons Attribution-NonCommercial-ShareAlike License\"}, \"newpage\": {\"title\": \"This page does not exist yet.\", \"create\": \"Create Page\", \"goback\": \"Go back\", \"subtitle\": \"Would you like to create it now?\"}, \"sidebar\": {\"root\": \"(root)\", \"browse\": \"Browse\", \"mainMenu\": \"Main Menu\", \"currentDirectory\": \"Current Directory\"}, \"welcome\": {\"title\": \"Welcome to your wiki!\", \"subtitle\": \"Let\'s get started and create the home page.\", \"createhome\": \"Create Home Page\"}, \"comments\": {\"none\": \"No comments yet.\", \"title\": \"Comments\", \"beFirst\": \"Be the first to comment.\", \"loading\": \"Loading comments...\", \"sdTitle\": \"Talk\", \"modified\": \"modified {{reldate}}\", \"fieldName\": \"Your Name\", \"postingAs\": \"Posting as {{name}}\", \"deleteWarn\": \"Are you sure you want to permanently delete this comment?\", \"fieldEmail\": \"Your Email Address\", \"newComment\": \"New Comment\", \"postComment\": \"Post Comment\", \"postSuccess\": \"New comment posted successfully.\", \"fieldContent\": \"Comment Content\", \"deleteSuccess\": \"Comment was deleted successfully.\", \"updateComment\": \"Update Comment\", \"updateSuccess\": \"Comment was updated successfully.\", \"markdownFormat\": \"Markdown Format\", \"newPlaceholder\": \"Write a new comment...\", \"viewDiscussion\": \"View Discussion\", \"deleteConfirmTitle\": \"Confirm Delete\", \"contentMissingError\": \"Comment is empty or too short!\", \"deletePermanentWarn\": \"This action cannot be undone!\"}, \"duration\": {\"days\": \"Day(s)\", \"every\": \"Every\", \"hours\": \"Hour(s)\", \"years\": \"Year(s)\", \"months\": \"Month(s)\", \"minutes\": \"Minute(s)\"}, \"notfound\": {\"title\": \"Not Found\", \"gohome\": \"Home\", \"subtitle\": \"This page does not exist.\"}, \"password\": {\"weak\": \"Weak\", \"strong\": \"Strong\", \"average\": \"Average\", \"veryWeak\": \"Very Weak\", \"veryStrong\": \"Very Strong\"}, \"pageSelector\": {\"pages\": \"Pages\", \"moveTitle\": \"Move / Rename Page Location\", \"createTitle\": \"Select New Page Location\", \"selectTitle\": \"Select a Page\", \"virtualFolders\": \"Virtual Folders\", \"folderEmptyWarning\": \"This folder is empty.\"}, \"unauthorized\": {\"login\": \"Login As...\", \"title\": \"Unauthorized\", \"action\": {\"edit\": \"You cannot edit the page.\", \"view\": \"You cannot view this page.\", \"create\": \"You cannot create the page.\", \"source\": \"You cannot view the page source.\", \"history\": \"You cannot view the page history.\", \"download\": \"You cannot download the page content.\", \"sourceVersion\": \"You cannot view the source of this version of the page.\", \"downloadVersion\": \"You cannot download the content for this page version.\"}, \"goback\": \"Go Back\"}, \"modernBrowser\": \"modern browser\", \"outdatedBrowserWarning\": \"Your browser is outdated. Upgrade to a {{modernBrowser}}.\"}, \"editor\": {\"page\": \"Page\", \"save\": {\"error\": \"An error occurred while creating the page\", \"saved\": \"Saved\", \"pleaseWait\": \"Please wait...\", \"processing\": \"Rendering\", \"createSuccess\": \"Page created successfully.\", \"updateSuccess\": \"Page updated successfully.\"}, \"props\": {\"css\": \"CSS\", \"html\": \"HTML\", \"info\": \"Info\", \"path\": \"Path\", \"tags\": \"Tags\", \"title\": \"Title\", \"locale\": \"Locale\", \"social\": \"Social\", \"styles\": \"Styles\", \"cssHint\": \"CSS will automatically be minified upon saving. Do not include surrounding style tags, only the actual CSS code.\", \"scripts\": \"Scripts\", \"htmlHint\": \"You must surround your javascript code with HTML script tags.\", \"pageInfo\": \"Page Info\", \"pathHint\": \"Do not include any leading or trailing slashes.\", \"tagsHint\": \"Use tags to categorize your pages and make them easier to find.\", \"publishEnd\": \"Publish ending on...\", \"scheduling\": \"Scheduling\", \"allowRatings\": \"Allow Ratings\", \"publishStart\": \"Publish starting on...\", \"publishState\": \"Publishing State\", \"allowComments\": \"Allow Comments\", \"displayAuthor\": \"Display Author Info\", \"publishToggle\": \"Published\", \"categorization\": \"Categorization\", \"pageProperties\": \"Page Properties\", \"publishEndHint\": \"Leave empty for no end date\", \"socialFeatures\": \"Social Features\", \"allowRatingsHint\": \"Enable rating capabilities on this page.\", \"publishStartHint\": \"Leave empty for no start date\", \"shortDescription\": \"Short Description\", \"allowCommentsHint\": \"Enable commenting abilities on this page.\", \"displayAuthorHint\": \"Show the page author along with the last edition time.\", \"displaySharingBar\": \"Display Sharing Toolbar\", \"publishToggleHint\": \"Unpublished pages are still visible to users with write permissions on this page.\", \"pathCategorization\": \"Path & Categorization\", \"shortDescriptionHint\": \"Shown below the title\", \"displaySharingBarHint\": \"Show a toolbar with buttons to share and print this page\"}, \"assets\": {\"title\": \"Assets\", \"headerId\": \"ID\", \"fileCount\": \"{{count}} files\", \"newFolder\": \"New Folder\", \"fetchImage\": \"Fetch Remote Image\", \"folderName\": \"Folder Name\", \"headerType\": \"Type\", \"imageAlign\": \"Image Alignment\", \"deleteAsset\": \"Delete Asset\", \"folderEmpty\": \"This asset folder is empty.\", \"headerAdded\": \"Added\", \"renameAsset\": \"Rename Asset\", \"uploadAssets\": \"Upload Assets\", \"uploadFailed\": \"File upload failed.\", \"deleteSuccess\": \"Asset deleted successfully.\", \"headerActions\": \"Actions\", \"noUploadError\": \"You must choose a file to upload first!\", \"renameSuccess\": \"Asset renamed successfully.\", \"headerFileSize\": \"File Size\", \"headerFilename\": \"Filename\", \"refreshSuccess\": \"List of assets refreshed successfully.\", \"deleteAssetWarn\": \"This action cannot be undone!\", \"deleteAssetConfirm\": \"Are you sure you want to delete asset\", \"folderCreateSuccess\": \"Asset folder created successfully.\", \"renameAssetSubtitle\": \"Enter the new name for this asset:\", \"uploadAssetsDropZone\": \"Browse or Drop files here...\", \"folderNameNamingRules\": \"Must follow the asset folder {{namingRules}}.\", \"folderNameNamingRulesLink\": \"naming rules\"}, \"markup\": {\"bold\": \"Bold\", \"italic\": \"Italic\", \"heading\": \"Heading {{level}}\", \"subscript\": \"Subscript\", \"blockquote\": \"Blockquote\", \"inlineCode\": \"Inline Code\", \"insertLink\": \"Insert Link\", \"insertBlock\": \"Insert Block\", \"keyboardKey\": \"Keyboard Key\", \"orderedList\": \"Ordered List\", \"superscript\": \"Superscript\", \"tableHelper\": \"Table Helper\", \"insertAssets\": \"Insert Assets\", \"horizontalBar\": \"Horizontal Bar\", \"insertDiagram\": \"Insert Diagram\", \"strikethrough\": \"Strikethrough\", \"unorderedList\": \"Unordered List\", \"blockquoteInfo\": \"Info Blockquote\", \"blockquoteError\": \"Error Blockquote\", \"insertCodeBlock\": \"Insert Code Block\", \"insertVideoAudio\": \"Insert Video / Audio\", \"noSelectionError\": \"Text must be selected first!\", \"toggleSpellcheck\": \"Toggle Spellcheck\", \"blockquoteSuccess\": \"Success Blockquote\", \"blockquoteWarning\": \"Warning Blockquote\", \"togglePreviewPane\": \"Hide / Show Preview Pane\", \"distractionFreeMode\": \"Distraction Free Mode\", \"insertMathExpression\": \"Insert Math Expression\", \"markdownFormattingHelp\": \"Markdown Formatting Help\"}, \"select\": {\"title\": \"Which editor do you want to use for this page?\", \"customView\": \"or create a custom view?\", \"cannotChange\": \"This cannot be changed once the page is created.\"}, \"unsaved\": {\"body\": \"You have unsaved changes. Are you sure you want to leave the editor and discard any modifications you made since the last save?\", \"title\": \"Discard Unsaved Changes?\"}, \"ckeditor\": {\"stats\": \"{{chars}} chars, {{words}} words\"}, \"conflict\": {\"title\": \"Resolve Save Conflict\", \"warning\": \"Save conflict! Another user has already modified this page.\", \"editable\": \"(editable)\", \"readonly\": \"(read-only)\", \"useLocal\": \"Use Local\", \"whatToDo\": \"What do you want to do?\", \"overwrite\": {\"title\": \"Overwrite with Remote Version?\", \"editsLost\": \"Your current edits will be lost.\", \"description\": \"Are you sure you want to replace your current version with the latest remote content? {{refEditsLost}}\"}, \"pageTitle\": \"Title:\", \"useRemote\": \"Use Remote\", \"infoGeneric\": \"A more recent version of this page was saved by {{authorName}}, {{date}}\", \"localVersion\": \"Local Version {{refEditable}}\", \"useLocalHint\": \"Use content in the left panel\", \"leftPanelInfo\": \"Your current edit, based on page version from {{date}}\", \"remoteVersion\": \"Remote Version {{refReadOnly}}\", \"useRemoteHint\": \"Discard local changes and use latest version\", \"whatToDoLocal\": \"Use your current local version and ignore the latest changes.\", \"rightPanelInfo\": \"Last edited by {{authorName}}, {{date}}\", \"whatToDoRemote\": \"Use the remote version (latest) and discard your changes.\", \"pageDescription\": \"Description:\", \"viewLatestVersion\": \"View Latest Version\"}, \"backToEditor\": \"Back to Editor\", \"unsavedWarning\": \"You have unsaved edits. Are you sure you want to leave the editor?\"}, \"history\": {\"restore\": {\"success\": \"Page version restored succesfully!\", \"confirmText\": \"Are you sure you want to restore this page content as it was on {{date}}? This version will be copied on top of the current history. As such, newer versions will still be preserved.\", \"confirmTitle\": \"Restore page version?\", \"confirmButton\": \"Restore\"}}, \"profile\": {\"auth\": {\"title\": \"Authentication\", \"provider\": \"Provider\", \"newPassword\": \"New Password\", \"changePassword\": \"Change Password\", \"verifyPassword\": \"Confirm New Password\", \"currentPassword\": \"Current Password\", \"changePassSuccess\": \"Password changed successfully.\"}, \"save\": {\"success\": \"Profile saved successfully.\"}, \"pages\": {\"title\": \"Pages\", \"subtitle\": \"List of pages I created or last modified\", \"emptyList\": \"No pages to display.\", \"headerPath\": \"Path\", \"headerTitle\": \"Title\", \"refreshSuccess\": \"Page list has been refreshed.\", \"headerCreatedAt\": \"Created\", \"headerUpdatedAt\": \"Last Updated\"}, \"title\": \"Profile\", \"groups\": {\"title\": \"Groups\"}, \"myInfo\": \"My Info\", \"activity\": {\"title\": \"Activity\", \"joinedOn\": \"Joined on\", \"lastLoginOn\": \"Last login on\", \"pagesCreated\": \"Pages created\", \"lastUpdatedOn\": \"Profile last updated on\", \"commentsPosted\": \"Comments posted\"}, \"comments\": {\"title\": \"Comments\"}, \"jobTitle\": \"Job Title\", \"location\": \"Location\", \"subtitle\": \"My personal info\", \"timezone\": \"Timezone\", \"appearance\": \"Appearance\", \"dateFormat\": \"Date Format\", \"displayName\": \"Display Name\", \"preferences\": \"Preferences\", \"localeDefault\": \"Locale Default\", \"appearanceDark\": \"Dark\", \"appearanceLight\": \"Light\", \"appearanceDefault\": \"Site Default\", \"viewPublicProfile\": \"View Public Profile\"}}',0,'English','English',100,'2021-12-25T16:14:39.286Z','2021-12-25T16:14:48.138Z');
/*!40000 ALTER TABLE `locales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loggers`
--

DROP TABLE IF EXISTS `loggers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loggers` (
  `key` varchar(255) NOT NULL,
  `isEnabled` tinyint(1) NOT NULL DEFAULT '0',
  `level` varchar(255) NOT NULL DEFAULT 'warn',
  `config` json DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loggers`
--

LOCK TABLES `loggers` WRITE;
/*!40000 ALTER TABLE `loggers` DISABLE KEYS */;
INSERT INTO `loggers` VALUES ('airbrake',0,'warn','{}'),('bugsnag',0,'warn','{\"key\": \"\"}'),('disk',0,'info','{}'),('eventlog',0,'warn','{}'),('loggly',0,'warn','{\"token\": \"\", \"subdomain\": \"\"}'),('logstash',0,'warn','{}'),('newrelic',0,'warn','{}'),('papertrail',0,'warn','{\"host\": \"\", \"port\": 0}'),('raygun',0,'warn','{}'),('rollbar',0,'warn','{\"key\": \"\"}'),('sentry',0,'warn','{\"key\": \"\"}'),('syslog',0,'warn','{}');
/*!40000 ALTER TABLE `loggers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2.0.0.js',1,'2021-12-25 16:13:48'),(2,'2.1.85.js',1,'2021-12-25 16:13:48'),(3,'2.2.3.js',1,'2021-12-25 16:13:48'),(4,'2.2.17.js',1,'2021-12-25 16:13:48'),(5,'2.3.10.js',1,'2021-12-25 16:13:49'),(6,'2.3.23.js',1,'2021-12-25 16:13:49'),(7,'2.4.13.js',1,'2021-12-25 16:13:49'),(8,'2.4.14.js',1,'2021-12-25 16:13:49'),(9,'2.4.36.js',1,'2021-12-25 16:13:49'),(10,'2.4.61.js',1,'2021-12-25 16:13:49'),(11,'2.5.1.js',1,'2021-12-25 16:13:49'),(12,'2.5.12.js',1,'2021-12-25 16:13:49'),(13,'2.5.108.js',1,'2021-12-25 16:13:49'),(14,'2.5.118.js',1,'2021-12-25 16:13:49'),(15,'2.5.122.js',1,'2021-12-25 16:13:49'),(16,'2.5.128.js',1,'2021-12-25 16:13:49');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations_lock`
--

DROP TABLE IF EXISTS `migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations_lock`
--

LOCK TABLES `migrations_lock` WRITE;
/*!40000 ALTER TABLE `migrations_lock` DISABLE KEYS */;
INSERT INTO `migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `navigation`
--

DROP TABLE IF EXISTS `navigation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `navigation` (
  `key` varchar(255) NOT NULL,
  `config` json DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `navigation`
--

LOCK TABLES `navigation` WRITE;
/*!40000 ALTER TABLE `navigation` DISABLE KEYS */;
INSERT INTO `navigation` VALUES ('site','[{\"items\": [{\"id\": \"b2a4c3c7-b603-49fb-87a0-6b5e84ac0703\", \"icon\": \"mdi-home\", \"kind\": \"link\", \"label\": \"Home\", \"target\": \"/\", \"targetType\": \"home\", \"visibilityMode\": \"all\", \"visibilityGroups\": null}], \"locale\": \"en\"}]');
/*!40000 ALTER TABLE `navigation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pageHistory`
--

DROP TABLE IF EXISTS `pageHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pageHistory` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isPrivate` tinyint(1) NOT NULL DEFAULT '0',
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  `publishStartDate` varchar(255) DEFAULT NULL,
  `publishEndDate` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT 'updated',
  `pageId` int unsigned DEFAULT NULL,
  `content` longtext,
  `contentType` varchar(255) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `editorKey` varchar(255) DEFAULT NULL,
  `localeCode` varchar(5) DEFAULT NULL,
  `authorId` int unsigned DEFAULT NULL,
  `versionDate` varchar(255) NOT NULL DEFAULT '',
  `extra` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pagehistory_editorkey_foreign` (`editorKey`),
  KEY `pagehistory_localecode_foreign` (`localeCode`),
  KEY `pagehistory_authorid_foreign` (`authorId`),
  CONSTRAINT `pagehistory_authorid_foreign` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`),
  CONSTRAINT `pagehistory_editorkey_foreign` FOREIGN KEY (`editorKey`) REFERENCES `editors` (`key`),
  CONSTRAINT `pagehistory_localecode_foreign` FOREIGN KEY (`localeCode`) REFERENCES `locales` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pageHistory`
--

LOCK TABLES `pageHistory` WRITE;
/*!40000 ALTER TABLE `pageHistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `pageHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pageHistoryTags`
--

DROP TABLE IF EXISTS `pageHistoryTags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pageHistoryTags` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `pageId` int unsigned DEFAULT NULL,
  `tagId` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pagehistorytags_pageid_foreign` (`pageId`),
  KEY `pagehistorytags_tagid_foreign` (`tagId`),
  CONSTRAINT `pagehistorytags_pageid_foreign` FOREIGN KEY (`pageId`) REFERENCES `pageHistory` (`id`) ON DELETE CASCADE,
  CONSTRAINT `pagehistorytags_tagid_foreign` FOREIGN KEY (`tagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pageHistoryTags`
--

LOCK TABLES `pageHistoryTags` WRITE;
/*!40000 ALTER TABLE `pageHistoryTags` DISABLE KEYS */;
/*!40000 ALTER TABLE `pageHistoryTags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pageLinks`
--

DROP TABLE IF EXISTS `pageLinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pageLinks` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `localeCode` varchar(5) NOT NULL,
  `pageId` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pagelinks_pageid_foreign` (`pageId`),
  KEY `pagelinks_path_localecode_index` (`path`,`localeCode`),
  CONSTRAINT `pagelinks_pageid_foreign` FOREIGN KEY (`pageId`) REFERENCES `pages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pageLinks`
--

LOCK TABLES `pageLinks` WRITE;
/*!40000 ALTER TABLE `pageLinks` DISABLE KEYS */;
/*!40000 ALTER TABLE `pageLinks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pageTags`
--

DROP TABLE IF EXISTS `pageTags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pageTags` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `pageId` int unsigned DEFAULT NULL,
  `tagId` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pagetags_pageid_foreign` (`pageId`),
  KEY `pagetags_tagid_foreign` (`tagId`),
  CONSTRAINT `pagetags_pageid_foreign` FOREIGN KEY (`pageId`) REFERENCES `pages` (`id`) ON DELETE CASCADE,
  CONSTRAINT `pagetags_tagid_foreign` FOREIGN KEY (`tagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pageTags`
--

LOCK TABLES `pageTags` WRITE;
/*!40000 ALTER TABLE `pageTags` DISABLE KEYS */;
/*!40000 ALTER TABLE `pageTags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pageTree`
--

DROP TABLE IF EXISTS `pageTree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pageTree` (
  `id` int unsigned NOT NULL,
  `path` varchar(255) NOT NULL,
  `depth` int unsigned NOT NULL,
  `title` varchar(255) NOT NULL,
  `isPrivate` tinyint(1) NOT NULL DEFAULT '0',
  `isFolder` tinyint(1) NOT NULL DEFAULT '0',
  `privateNS` varchar(255) DEFAULT NULL,
  `parent` int unsigned DEFAULT NULL,
  `pageId` int unsigned DEFAULT NULL,
  `localeCode` varchar(5) DEFAULT NULL,
  `ancestors` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pagetree_parent_foreign` (`parent`),
  KEY `pagetree_pageid_foreign` (`pageId`),
  KEY `pagetree_localecode_foreign` (`localeCode`),
  CONSTRAINT `pagetree_localecode_foreign` FOREIGN KEY (`localeCode`) REFERENCES `locales` (`code`),
  CONSTRAINT `pagetree_pageid_foreign` FOREIGN KEY (`pageId`) REFERENCES `pages` (`id`) ON DELETE CASCADE,
  CONSTRAINT `pagetree_parent_foreign` FOREIGN KEY (`parent`) REFERENCES `pageTree` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pageTree`
--

LOCK TABLES `pageTree` WRITE;
/*!40000 ALTER TABLE `pageTree` DISABLE KEYS */;
/*!40000 ALTER TABLE `pageTree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pages` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isPrivate` tinyint(1) NOT NULL DEFAULT '0',
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  `privateNS` varchar(255) DEFAULT NULL,
  `publishStartDate` varchar(255) DEFAULT NULL,
  `publishEndDate` varchar(255) DEFAULT NULL,
  `content` longtext,
  `render` longtext,
  `toc` json DEFAULT NULL,
  `contentType` varchar(255) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  `editorKey` varchar(255) DEFAULT NULL,
  `localeCode` varchar(5) DEFAULT NULL,
  `authorId` int unsigned DEFAULT NULL,
  `creatorId` int unsigned DEFAULT NULL,
  `extra` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pages_editorkey_foreign` (`editorKey`),
  KEY `pages_localecode_foreign` (`localeCode`),
  KEY `pages_authorid_foreign` (`authorId`),
  KEY `pages_creatorid_foreign` (`creatorId`),
  CONSTRAINT `pages_authorid_foreign` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`),
  CONSTRAINT `pages_creatorid_foreign` FOREIGN KEY (`creatorId`) REFERENCES `users` (`id`),
  CONSTRAINT `pages_editorkey_foreign` FOREIGN KEY (`editorKey`) REFERENCES `editors` (`key`),
  CONSTRAINT `pages_localecode_foreign` FOREIGN KEY (`localeCode`) REFERENCES `locales` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `renderers`
--

DROP TABLE IF EXISTS `renderers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `renderers` (
  `key` varchar(255) NOT NULL,
  `isEnabled` tinyint(1) NOT NULL DEFAULT '0',
  `config` json DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `renderers`
--

LOCK TABLES `renderers` WRITE;
/*!40000 ALTER TABLE `renderers` DISABLE KEYS */;
INSERT INTO `renderers` VALUES ('htmlAsciinema',0,'{}'),('htmlBlockquotes',1,'{}'),('htmlCodehighlighter',1,'{}'),('htmlCore',1,'{\"absoluteLinks\": false, \"openExternalLinkNewTab\": false, \"relAttributeExternalLink\": \"noreferrer\"}'),('htmlDiagram',1,'{}'),('htmlImagePrefetch',0,'{}'),('htmlMediaplayers',1,'{}'),('htmlMermaid',1,'{}'),('htmlSecurity',1,'{\"safeHTML\": true, \"allowIFrames\": false, \"allowDrawIoUnsafe\": true}'),('htmlTabset',1,'{}'),('htmlTwemoji',1,'{}'),('markdownAbbr',1,'{}'),('markdownCore',1,'{\"quotes\": \"English\", \"linkify\": true, \"allowHTML\": true, \"underline\": false, \"linebreaks\": true, \"typographer\": false}'),('markdownEmoji',1,'{}'),('markdownExpandtabs',1,'{\"tabWidth\": 4}'),('markdownFootnotes',1,'{}'),('markdownImsize',1,'{}'),('markdownKatex',1,'{\"useBlocks\": true, \"useInline\": true}'),('markdownKroki',0,'{\"server\": \"https://kroki.io\", \"openMarker\": \"```kroki\", \"closeMarker\": \"```\"}'),('markdownMathjax',0,'{\"useBlocks\": true, \"useInline\": true}'),('markdownMultiTable',0,'{\"rowspanEnabled\": true, \"multilineEnabled\": true, \"headerlessEnabled\": true}'),('markdownPlantuml',1,'{\"server\": \"https://plantuml.requarks.io\", \"openMarker\": \"```plantuml\", \"closeMarker\": \"```\", \"imageFormat\": \"svg\"}'),('markdownSupsub',1,'{\"subEnabled\": true, \"supEnabled\": true}'),('markdownTasklists',1,'{}'),('openapiCore',1,'{}');
/*!40000 ALTER TABLE `renderers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `searchEngines`
--

DROP TABLE IF EXISTS `searchEngines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `searchEngines` (
  `key` varchar(255) NOT NULL,
  `isEnabled` tinyint(1) NOT NULL DEFAULT '0',
  `config` json DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `searchEngines`
--

LOCK TABLES `searchEngines` WRITE;
/*!40000 ALTER TABLE `searchEngines` DISABLE KEYS */;
INSERT INTO `searchEngines` VALUES ('algolia',0,'{\"appId\": \"\", \"apiKey\": \"\", \"indexName\": \"wiki\"}'),('aws',0,'{\"domain\": \"\", \"region\": \"us-east-1\", \"endpoint\": \"\", \"accessKeyId\": \"\", \"secretAccessKey\": \"\", \"AnalysisSchemeLang\": \"en\"}'),('azure',0,'{\"adminKey\": \"\", \"indexName\": \"wiki\", \"serviceName\": \"\"}'),('db',1,'{}'),('elasticsearch',0,'{\"hosts\": \"\", \"analyzer\": \"simple\", \"indexName\": \"wiki\", \"apiVersion\": \"6.x\", \"sniffOnStart\": false, \"sniffInterval\": 0}'),('manticore',0,'{}'),('postgres',0,'{\"dictLanguage\": \"english\"}'),('solr',0,'{\"core\": \"wiki\", \"host\": \"solr\", \"port\": 8983, \"protocol\": \"http\"}'),('sphinx',0,'{}');
/*!40000 ALTER TABLE `searchEngines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(255) NOT NULL,
  `sess` json NOT NULL,
  `expired` datetime NOT NULL,
  PRIMARY KEY (`sid`),
  KEY `sessions_expired_index` (`expired`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `settings` (
  `key` varchar(255) NOT NULL,
  `value` json DEFAULT NULL,
  `updatedAt` varchar(255) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES ('auth','{\"audience\": \"urn:wiki.js\", \"tokenRenewal\": \"14d\", \"tokenExpiration\": \"30m\"}','2021-12-25T16:14:38.963Z'),('certs','{\"jwk\": {\"e\": \"AQAB\", \"n\": \"4MuVQenZeRgd5l6WA-OFFaPM-4CRyXcp6yoesx339xdcS7mNM7K8HGv6hRKwTlrhu3hF28fjfJWNg-joCQDu-6Ri9R4DIvCt57bvwIHZPyM9jcReuWoMepC3Dz-l-AZ0GuCVQQ3F8OuODYXYfNEFSWMbKUeO2JJGgYYSm_DWNBt4VFF27CBznzt2GvVRFA474I9TEBB3PttoH-Z8xorepvlIJPbJeifLwlTmBBs-J1oCrGKMP7nwUIwXjhg2GnHkF-YAyVkm2AO7PKAx-9AxOYOufwM0rsWGRYZejp4tWMa3Uua0WFNrrgLl3EolP5pqScAOB_Mx6W57lCsaVm2GqQ\", \"kty\": \"RSA\"}, \"public\": \"-----BEGIN RSA PUBLIC KEY-----\\nMIIBCgKCAQEA4MuVQenZeRgd5l6WA+OFFaPM+4CRyXcp6yoesx339xdcS7mNM7K8\\nHGv6hRKwTlrhu3hF28fjfJWNg+joCQDu+6Ri9R4DIvCt57bvwIHZPyM9jcReuWoM\\nepC3Dz+l+AZ0GuCVQQ3F8OuODYXYfNEFSWMbKUeO2JJGgYYSm/DWNBt4VFF27CBz\\nnzt2GvVRFA474I9TEBB3PttoH+Z8xorepvlIJPbJeifLwlTmBBs+J1oCrGKMP7nw\\nUIwXjhg2GnHkF+YAyVkm2AO7PKAx+9AxOYOufwM0rsWGRYZejp4tWMa3Uua0WFNr\\nrgLl3EolP5pqScAOB/Mx6W57lCsaVm2GqQIDAQAB\\n-----END RSA PUBLIC KEY-----\\n\", \"private\": \"-----BEGIN RSA PRIVATE KEY-----\\nProc-Type: 4,ENCRYPTED\\nDEK-Info: AES-256-CBC,AB5F97254B0B62E06F20158E0A986575\\n\\nYTZ1/WbTA+rcdcfZ7ZmdRwGjqvwgtQDEfUH7gY0zMOA9a+QHT7OtfDv8wUOpmplW\\nUpA4fa/VPiyn3SeG8/psQF5OMWGRlDe8o1NXT9GuH2tvMprvlgyoOueHkvmzEfZT\\nAITfbUoX0PjNBWa1rm8Fft94T4pnJWFT4fgR05XvMjmNAXffCl47/IkcgHrTN3BB\\nMrY7VpqYivUbeSR5d3qpbvt6CeAO79BrmgVXYQYLsUYQ3S80l4mbOUPtZplUSy0x\\n1JBnfDMwwIpS3pe2LA69cFNhpsnzPBzPeqkCnx9mvp8Dnol9MlWLGwmCZoc8j7n3\\n9VuyWGT0lJdtLbyVc6Pipkyho7iCH+c8neDE4yaDE9WudyY1EyDDoFCwrNBe4R6G\\nTn1eKn0KjZMne1ktFyPekuAmBVSMf3bAnwLM1GTzZ4JYqHoCmCh+jj73GCMDUL34\\nRI6YlbnHUdqebO/Q0nZQs3dGn8NDhwL2rDxDIgXafUTytP7P0qLCDkEeCbt/wxTO\\nmfdo4mdfwqG5+eeu2WH5Si26itxSxVEv7alie+YEFBX1YXprHp6PJtRzwYhTjnY4\\nzG97gWD/0Fh+0wRDTVC5KsrdQkZY9w0AVVZrn7iMmdSfhHqmKcLgeQvq7gTG1L2I\\npoLXR0MHo5gEI/z+sb3nbi0zt2ktJEtXYNOSqUOkLsR36SpgsvngUqzODAfoBvyP\\nOshelCmTjHx7092rBMp0NVjO+zY6qew4Ni7Zqkq7Jo9mPVKX+rjms/CykILGPJQH\\no/8sydckyqDtRbV9rcJCG3owalQSoOoFuUSfVZ1Dpyn/lWErOu67obeOF87ybGL4\\nH9Q6wdubmT7xfqY7qzxYqYkA6BpcOj3z2N+3uxAs+Hirohyago31sTGhcl2oN52e\\nHOa13P73A8cqsnO+mc47rDGDuEy6WfxN0CCuJ5/KfyaFKzbQ6B2PmqRS6VsuPK0a\\nKXCGQYvmGDrr7HOfSjhsyMxDwE/T5K+nf5631LL7A8mA5w5HPfSIWa4JI1QtvBuQ\\nUuzTHryC7sSeMW8u5HJND49wkw51lcipXeSTcw6LJaDHHxTRl2XPQQuE5ix5uA/5\\nM5nXHAK//dTQmUQAX+Ha3sKWU4A+d0w4gkfTeXg1fyGXQ5fqh4C1oEHiSOWw/AqI\\nWTwH9GU9l7mD5pc2qdkDJFYNhaoFreCAa1wek1D431umihNvVbQWqBsXeX817bRm\\nQ7VWE7syTlj5915sU/tDz/piYSIZyi+D7+cKMH/kdpYZBWhpiOMDA78l7tLLdMOI\\nuHavOC0QwdRSWCKjMXluAoHDfGopXQaQP7PH+BhH4lBsgDkYVeI+QkJmoKJmOgXI\\nA8sLipxewVbGj7zEi6n6+Ow7FXl+QCNL0HXuhU//0/C05xz8km2ZD2Whhgi04fDO\\nKodo+TWEdwYBXDOJuAuxexZiDR9btWGYffb49ZT2/KyC6b61uXc5ikGMDrrzn43V\\nm4lY5ywarp9jCe4Gh2EeBsBjbkgSqpznzXoYFJfZn0d/YnNdZJ6XpwAd32gfLkCB\\nrSzRY0Bfk+ulXpACYd2lrXQePJkYP94+TXVK1+cDMIwS3NjkjtGlkx/ee0wQApof\\n-----END RSA PRIVATE KEY-----\\n\"}','2021-12-25T16:14:38.985Z'),('company','{\"v\": \"\"}','2021-12-25T16:14:39.004Z'),('features','{\"featurePageRatings\": true, \"featurePageComments\": true, \"featurePersonalWikis\": true}','2021-12-25T16:14:39.014Z'),('graphEndpoint','{\"v\": \"https://graph.requarks.io\"}','2021-12-25T16:14:39.028Z'),('host','{\"v\": \"https://wiki.yourdomain.com\"}','2021-12-25T16:14:39.038Z'),('lang','{\"code\": \"en\", \"autoUpdate\": true, \"namespaces\": [], \"namespacing\": false}','2021-12-25T16:14:39.047Z'),('logo','{\"hasLogo\": false, \"logoIsSquare\": false}','2021-12-25T16:14:39.058Z'),('mail','{\"host\": \"\", \"pass\": \"\", \"port\": 465, \"user\": \"\", \"secure\": true, \"useDKIM\": false, \"verifySSL\": true, \"senderName\": \"\", \"senderEmail\": \"\", \"dkimDomainName\": \"\", \"dkimPrivateKey\": \"\", \"dkimKeySelector\": \"\"}','2021-12-25T16:14:39.065Z'),('seo','{\"robots\": [\"index\", \"follow\"], \"analyticsId\": \"\", \"description\": \"\", \"analyticsService\": \"\"}','2021-12-25T16:14:39.075Z'),('sessionSecret','{\"v\": \"b750c784169a33065d85da72ba7a36c0fed6b0eef9a6145693cfaa0aaa70af53\"}','2021-12-25T16:14:39.087Z'),('telemetry','{\"clientId\": \"b131e54e-31d0-4ada-ae33-c962ad272b2a\", \"isEnabled\": false}','2021-12-25T16:14:39.097Z'),('theming','{\"theme\": \"default\", \"iconset\": \"mdi\", \"darkMode\": false, \"injectCSS\": \"\", \"injectBody\": \"\", \"injectHead\": \"\"}','2021-12-25T16:14:39.112Z'),('title','{\"v\": \"Wiki.js\"}','2021-12-25T16:14:39.131Z'),('uploads','{\"scanSVG\": true, \"maxFiles\": 10, \"maxFileSize\": 5242880}','2021-12-25T16:14:39.124Z');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage`
--

DROP TABLE IF EXISTS `storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage` (
  `key` varchar(255) NOT NULL,
  `isEnabled` tinyint(1) NOT NULL DEFAULT '0',
  `mode` varchar(255) NOT NULL DEFAULT 'push',
  `config` json DEFAULT NULL,
  `syncInterval` varchar(255) DEFAULT NULL,
  `state` json DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage`
--

LOCK TABLES `storage` WRITE;
/*!40000 ALTER TABLE `storage` DISABLE KEYS */;
INSERT INTO `storage` VALUES ('azure',0,'push','{\"accountKey\": \"\", \"accountName\": \"\", \"storageTier\": \"Cool\", \"containerName\": \"wiki\"}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('box',0,'push','{\"clientId\": \"\", \"rootFolder\": \"\", \"clientSecret\": \"\"}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('digitalocean',0,'push','{\"bucket\": \"\", \"endpoint\": \"nyc3.digitaloceanspaces.com\", \"accessKeyId\": \"\", \"secretAccessKey\": \"\"}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('disk',0,'push','{\"path\": \"\", \"createDailyBackups\": false}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('dropbox',0,'push','{\"appKey\": \"\", \"appSecret\": \"\"}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('gdrive',0,'push','{\"clientId\": \"\", \"clientSecret\": \"\"}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('git',0,'sync','{\"branch\": \"master\", \"repoUrl\": \"\", \"authType\": \"ssh\", \"verifySSL\": true, \"defaultName\": \"John Smith\", \"defaultEmail\": \"name@company.com\", \"basicPassword\": \"\", \"basicUsername\": \"\", \"gitBinaryPath\": \"\", \"localRepoPath\": \"./data/repo\", \"sshPrivateKeyMode\": \"path\", \"sshPrivateKeyPath\": \"\", \"sshPrivateKeyContent\": \"\"}','PT5M','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('onedrive',0,'push','{\"clientId\": \"\", \"clientSecret\": \"\"}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('s3',0,'push','{\"bucket\": \"\", \"region\": \"\", \"accessKeyId\": \"\", \"secretAccessKey\": \"\"}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('s3generic',0,'push','{\"bucket\": \"\", \"endpoint\": \"https://service.region.example.com\", \"sslEnabled\": true, \"accessKeyId\": \"\", \"secretAccessKey\": \"\", \"s3BucketEndpoint\": false, \"s3ForcePathStyle\": false}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}'),('sftp',0,'push','{\"host\": \"\", \"port\": 22, \"authMode\": \"privateKey\", \"basePath\": \"/root/wiki\", \"password\": \"\", \"username\": \"\", \"passphrase\": \"\", \"privateKey\": \"\"}','P0D','{\"status\": \"pending\", \"message\": \"\", \"lastAttempt\": null}');
/*!40000 ALTER TABLE `storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tags_tag_unique` (`tag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userAvatars`
--

DROP TABLE IF EXISTS `userAvatars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userAvatars` (
  `id` int NOT NULL,
  `data` longblob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userAvatars`
--

LOCK TABLES `userAvatars` WRITE;
/*!40000 ALTER TABLE `userAvatars` DISABLE KEYS */;
/*!40000 ALTER TABLE `userAvatars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userGroups`
--

DROP TABLE IF EXISTS `userGroups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userGroups` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `userId` int unsigned DEFAULT NULL,
  `groupId` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usergroups_userid_foreign` (`userId`),
  KEY `usergroups_groupid_foreign` (`groupId`),
  CONSTRAINT `usergroups_groupid_foreign` FOREIGN KEY (`groupId`) REFERENCES `groups` (`id`) ON DELETE CASCADE,
  CONSTRAINT `usergroups_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userGroups`
--

LOCK TABLES `userGroups` WRITE;
/*!40000 ALTER TABLE `userGroups` DISABLE KEYS */;
INSERT INTO `userGroups` VALUES (1,1,1),(2,2,2);
/*!40000 ALTER TABLE `userGroups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userKeys`
--

DROP TABLE IF EXISTS `userKeys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userKeys` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `kind` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `validUntil` varchar(255) NOT NULL,
  `userId` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userkeys_userid_foreign` (`userId`),
  CONSTRAINT `userkeys_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userKeys`
--

LOCK TABLES `userKeys` WRITE;
/*!40000 ALTER TABLE `userKeys` DISABLE KEYS */;
/*!40000 ALTER TABLE `userKeys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `providerId` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `tfaIsActive` tinyint(1) NOT NULL DEFAULT '0',
  `tfaSecret` varchar(255) DEFAULT NULL,
  `jobTitle` varchar(255) DEFAULT '',
  `location` varchar(255) DEFAULT '',
  `pictureUrl` varchar(255) DEFAULT NULL,
  `timezone` varchar(255) NOT NULL DEFAULT 'America/New_York',
  `isSystem` tinyint(1) NOT NULL DEFAULT '0',
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  `isVerified` tinyint(1) NOT NULL DEFAULT '0',
  `mustChangePwd` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL,
  `providerKey` varchar(255) NOT NULL DEFAULT 'local',
  `localeCode` varchar(5) NOT NULL DEFAULT 'en',
  `defaultEditor` varchar(255) NOT NULL DEFAULT 'markdown',
  `lastLoginAt` varchar(255) DEFAULT NULL,
  `dateFormat` varchar(255) NOT NULL DEFAULT '',
  `appearance` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_providerkey_email_unique` (`providerKey`,`email`),
  KEY `users_localecode_foreign` (`localeCode`),
  KEY `users_defaulteditor_foreign` (`defaultEditor`),
  CONSTRAINT `users_defaulteditor_foreign` FOREIGN KEY (`defaultEditor`) REFERENCES `editors` (`key`),
  CONSTRAINT `users_localecode_foreign` FOREIGN KEY (`localeCode`) REFERENCES `locales` (`code`),
  CONSTRAINT `users_providerkey_foreign` FOREIGN KEY (`providerKey`) REFERENCES `authentication` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pedro@mail.pt','Administrator',NULL,'$2a$12$M7haesbb/23w7lX04hdtYedFN48/UhdMt0I.dicvNHIeSoUK3.ZNG',0,NULL,'','',NULL,'America/New_York',0,1,1,0,'2021-12-25T16:14:39.730Z','2021-12-25T16:14:39.730Z','local','en','markdown',NULL,'',''),(2,'guest@example.com','Guest',NULL,'',0,NULL,'','',NULL,'America/New_York',1,1,1,0,'2021-12-25T16:14:40.096Z','2021-12-25T16:14:40.096Z','local','en','markdown',NULL,'','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-25 16:25:20
