-- --------------------------------------------------------
-- Host:                         192.168.1.15
-- Server version:               10.6.4-MariaDB-1:10.6.4+maria~focal - mariadb.org binary distribution
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for moodboard
DROP DATABASE IF EXISTS `moodboard`;
CREATE DATABASE IF NOT EXISTS `moodboard` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `moodboard`;

-- Dumping structure for table moodboard.post
DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `postId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `postContent` text NOT NULL,
  `addBy` varchar(128) NOT NULL,
  `addAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`postId`),
  KEY `FK_post_user` (`addBy`),
  CONSTRAINT `FK_post_user` FOREIGN KEY (`addBy`) REFERENCES `user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table moodboard.post: ~2 rows (approximately)
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` (`postId`, `postContent`, `addBy`, `addAt`) VALUES
	(1, 'A great evening to start a new project', 'ethan', '2022-03-22 20:20:45'),
	(2, 'Some progress', 'ethan', '2022-03-22 20:59:07'),
	(3, 'Spring is coming', 'ethan', '2022-03-23 01:40:45'),
	(4, 'Tomorrow is another day', 'ethan', '2022-03-23 01:46:18');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;

-- Dumping structure for table moodboard.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(128) NOT NULL,
  `passHash` varchar(256) NOT NULL,
  `cookieHash` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table moodboard.user: ~1 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`userId`, `username`, `passHash`, `cookieHash`) VALUES
	(1, 'ethan', 'aa', '');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
