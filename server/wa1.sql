-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Лип 16 2023 р., 18:00
-- Версія сервера: 10.4.25-MariaDB
-- Версія PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `wa1`
--

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `uid` smallint(6) NOT NULL,
  `username` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `name` varchar(20) NOT NULL DEFAULT '',
  `surname` varchar(30) NOT NULL DEFAULT '',
  `admin` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`uid`, `username`, `password`, `name`, `surname`, `admin`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Administrátor', 'systému', 1),
(2, 'uwa', '78f0f32c08873cfdba57f17c855943c0', 'predmet', 'UWA', 0),
(3, 'ferrari', '0911054d8ad47cc256400031197f3e97', 'Enzo', 'Ferrari', 1),
(4, 'roman', 'b179a9ec0777eae19382c14319872e1b', 'Roman', 'Hrušecký', 0),
(5, 'jozko', '256f035bd7cf72238fad007fb9199c66', 'Jožko', 'Púčik', 0),
(6, 'mrkva', 'bfd7d9c62540ed72de0f32932077bef7', 'Janko', 'Mrkvička', 0),
(7, 'first', 'first', 'first', 'first', 0),
(8, 'login', '1a1dc91c907325c69271ddf0c944bc72', 'name', 'secondname', 0),
(13, 'misha', '383d802a4c84af5ac3719276218bb918', 'Misha', 'Malinov', 0),
(15, 'anton', '784742a66a3a0c271feced5b149ff8db', 'Anton', 'Malinov', 0),
(16, 'vitalij', 'c4561710b4ad6e7f86ae136f23892d55', 'Vitalij', 'Malinov', 0),
(17, 'mishok_malinok', '389de5ad96d72625be95569fc830e0a1', 'Misha', 'Malinov', 0),
(18, 'malinov1', '51a822801c9324bfff919fbfe06429fd', 'Michel', 'Jordan', 0),
(19, 'new_user', 'new_user', 'User', 'New', 0),
(20, 'noname', 'noname', '', '', 0),
(21, 'andrij', '29eb362e2c86ad0c10601d790b4fb1a1', 'Andrij', 'Vasulenko', 0),
(22, 'ondrej', '41739d1d9deaca99cc0e0c79f5d1e00b', 'Ondrej', 'Skroveda', 0),
(23, 'temp', '3d801aa532c1cec3ee82d87a99fdf63f', 'Trololo228)', '', 0),
(25, 'antonio', '4a181673429f0b6abbfd452f0f3b5950', 'Anton', 'Malinov', 0),
(26, 'hello', '5d41402abc4b2a76b9719d911017c592', 'Hello', 'World', 0);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `uid` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
