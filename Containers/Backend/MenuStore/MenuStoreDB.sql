-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Oct 14, 2024 at 03:29 PM
-- Server version: 9.0.1
-- PHP Version: 8.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--
CREATE DATABASE IF NOT EXISTS `db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `db`;
--
-- Database: `MenuStoreDB`
--
CREATE DATABASE IF NOT EXISTS `MenuStoreDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `MenuStoreDB`;

-- --------------------------------------------------------

--
-- Table structure for table `burgers`
--

CREATE TABLE `burgers` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `ingredients` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `burgers`
--

INSERT INTO `burgers` (`id`, `name`, `ingredients`) VALUES
(1, 'cheese burger', 'bread, beef patty, cheese, lettuce, ketchup'),
(2, 'chicken burger', 'bread, chicken patty, cheese, lettuce, ketchup'),
(3, 'bacon cheese burger', 'bread, beef patty, cheese, bacon, lettuce, ketchup'),
(4, 'bacon chicken burger', 'bread, chicken patty, cheese, bacon, lettuce, ketchup');

-- --------------------------------------------------------

--
-- Table structure for table `drinks`
--

CREATE TABLE `drinks` (
  `id` int NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `drinks`
--

INSERT INTO `drinks` (`id`, `name`) VALUES
(1, 'fanta'),
(2, 'fanta exotic'),
(3, 'cola'),
(4, 'cola zero'),
(5, 'water');

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`id`, `name`, `type`) VALUES
(1, 'bread', 'vegetarian'),
(2, 'beef patty', 'meat'),
(3, 'ketchup', 'vegetarian'),
(4, 'truffle mayonaise', 'vegetarian'),
(5, 'cheese', 'vegetarian'),
(6, 'lettuce', 'vegan'),
(7, 'chicken patty', 'meat'),
(8, 'bacon', 'meat'),
(9, 'chicken nuggets', 'meat'),
(10, 'french fries', 'vegan'),
(11, 'barbeque sauce', 'vegetarian'),
(12, 'sweet and sour sauce', 'vegetarian'),
(13, 'baconaise sauce', 'meat');

-- --------------------------------------------------------

--
-- Table structure for table `menues`
--

CREATE TABLE `menues` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `burger` text NOT NULL,
  `sides` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `menues`
--

INSERT INTO `menues` (`id`, `name`, `burger`, `sides`) VALUES
(1, 'cheeseburger and co', 'cheeseburger', 'french fries'),
(2, 'chicken burger and co', 'chicken burger', 'french fries'),
(3, 'bacon cheese burger and co', 'bacon cheese burger', 'french fries'),
(4, 'bacon chicken burger and co', 'bacon chicken burger', 'french fries'),
(5, '4x nuggets and co', '', '4x nuggets, french fries'),
(6, '9x nuggets and co', '', '9x nuggets, french fries');

-- --------------------------------------------------------

--
-- Table structure for table `sides`
--

CREATE TABLE `sides` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sides`
--

INSERT INTO `sides` (`id`, `name`, `type`) VALUES
(1, '4x nuggets', 'meat'),
(2, '9x nuggets', 'meat'),
(3, 'baconaise dip', 'meat'),
(4, 'truffel mayo dip', 'vegetarian'),
(5, 'barbeque dip', 'vegetarian'),
(6, 'sweet and sour dip', 'vegetarian'),
(7, 'fries', 'vegan'),
(8, 'ketchup', 'vegan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `burgers`
--
ALTER TABLE `burgers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drinks`
--
ALTER TABLE `drinks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menues`
--
ALTER TABLE `menues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sides`
--
ALTER TABLE `sides`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `burgers`
--
ALTER TABLE `burgers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `drinks`
--
ALTER TABLE `drinks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `menues`
--
ALTER TABLE `menues`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sides`
--
ALTER TABLE `sides`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
