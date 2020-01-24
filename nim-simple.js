/* Nim Super Simple */

/* Globals 
 * count = integer, winner = String
 */ 
 count = 0;
 turn = 0;
 winner = null;
 /* Main Code 
  * loop while count <21
  * if count < 21 call cpuTurn, adding to count and alerting count. Set winner as player. 
  * if count < 21 call playerTurn, adding to count and alerting count. Set winner as CPU.
  * end loop
  * alert winner
  */
  while(count < 21) {
	if (count < 21) {
		cpuTurn();
	alert(count) }
	if (count < 21) {
		userTurn();
	alert(count) }
  }
  else alert(winner);
/* playerTurn
 * set winner as CPU
 * prompt for turn (1-3)
 * @param none
 * @return turn (integer)
 */
function userTurn(); {
	winner = CPU;
	prompt("Pick a number 1-3, count is"+count+)

/* cpuTurn
 * set winner as player
 * set turn as random number 1-3
 * alert CPU's turn
 * return turn
 */
