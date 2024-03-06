 //model
 const app = document.getElementById("app");
 let result;
 let pickBoard = true;
 let lives = 3;
 let currentHoverCell;
 let board;
 let randomNonogram;
 let coloredCellArray = [];
 let rightClickCellArray = [];
 // 3x3 nonograms:
 let nonogram3x3n1 = {
   cellArray: [5, 6, 9, 10, 11, 14],
   rows: ["2", "3", "1"],
   columns: ["2", "3", "1"],
 };
 let nonogram3x3n2 = {
   cellArray: [6, 7, 9, 10, 13, 15],
   rows: ["2", "2", "1, 1"],
   columns: ["2", "2", "1, 1"],
 };
 let nonogram3x3n3 = {
   cellArray: [5, 7, 10, 13, 15],
   rows: ["1, 1", "1", "1, 1"],
   columns: ["1, 1", "1", "1, 1"],
 };
 const listOfPossible3x3Nonograms = [
   nonogram3x3n1,
   nonogram3x3n2,
   nonogram3x3n3,
 ];
 // 5x5 nonograms:
 let nonogram5x5n1 = {
   cellArray: [
     7, 11, 13, 14, 15, 16, 17, 20, 21, 22, 25, 26, 27, 28, 29, 32, 34,
   ],
   rows: ["1, 1", "5", "3", "5", "1, 1"],
   columns: ["2, 1", "4", "3", "4", "2, 1"],
 };
 let nonogram5x5n2 = {
   cellArray: [8, 10, 14, 16, 25, 29, 32, 33, 34],
   rows: ["1, 1", "1, 1", "0", "1, 1", "3"],
   columns: ["1", "2, 1", "1", "2, 1", "1"],
 };
 let nonogram5x5n3 = {
   cellArray: [
     7, 11, 13, 14, 15, 16, 17, 19, 21, 23, 25, 26, 28, 29, 32, 33, 34,
   ],
   rows: ["1, 1", "5", "1, 1, 1", "2, 2", "3"],
   columns: ["4", "1, 2", "2, 1", "1, 2", "4"],
 };
 let nonogram5x5n4 = {
   cellArray: [7, 11, 13, 15, 17, 20, 22, 26, 28, 31, 32, 34, 35],
   rows: ["1, 1", "1, 1, 1", "1, 1", "1, 1", "2, 2"],
   columns: ["2, 1", "3", "1", "3", "2, 1"],
 };
 const listOfPossible5x5Nonograms = [
   nonogram5x5n1,
   nonogram5x5n2,
   nonogram5x5n3,
   nonogram5x5n4,
 ];