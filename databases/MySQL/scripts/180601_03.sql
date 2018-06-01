INSERT INTO `executedScripts` (`name`, `description`, `createdDate`, `executedDate`)
VALUES
	('180601_03', 'Link features to subscriptionFeatures table', NOW(), NOW());

CREATE TABLE `subscriptionFeatures` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `subscriptionId` int(3) unsigned NOT NULL,
  `featureId` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_SubscriptionId` (`subscriptionId`),
  KEY `FK_featureId` (`featureId`),
  CONSTRAINT `FK_SubscriptionId` FOREIGN KEY (`subscriptionId`) REFERENCES `subscriptions` (`id`),
  CONSTRAINT `FK_featureId` FOREIGN KEY (`featureId`) REFERENCES `features` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

INSERT INTO `subscriptionFeatures` (`id`, `subscriptionId`, `featureId`)
VALUES
	(1, 1, 1);