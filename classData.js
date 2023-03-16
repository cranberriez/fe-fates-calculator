let hoshidanModifiers = `Apothecary	45	24	15	19	19	21	23	20
Archer	40	21	15	23	21	20	20	17
Basara	65	31	30	30	31	35	30	32
Blacksmith	65	33	25	32	31	30	32	27
Diviner	35	17	22	20	23	19	16	20
Falcon Knight	55	28	27	30	34	35	27	35
Great Master	55	32	30	31	33	32	28	32
Hoshido Noble	60	34	28	29	30	33	31	28
Kinshi Knight	50	27	26	33	31	34	25	31
Kitsune	40	20	18	23	24	24	18	23
Master Ninja	55	27	25	35	35	28	26	34
Master of Arms	65	33	25	30	30	31	31	28
Mechanist	60	30	25	33	30	30	31	31
Merchant	65	33	25	29	28	32	33	30
Monk, Shrine Maiden	35	18	21	20	22	23	17	24
Nine-Tails	55	29	29	33	34	33	27	34
Ninja	35	17	15	25	25	18	19	20
Oni Chieftain	60	34	28	25	30	25	36	31
Oni Savage	45	24	19	16	20	17	23	18
Onmyoji	45	25	33	31	32	27	25	31
Priestess	50	29	32	30	33	34	26	34
Samurai	40	20	16	23	25	24	18	20
Sky Knight	35	19	16	21	23	25	18	25
Sniper	55	31	25	35	33	30	31	28
Songstress	45	28	27	31	31	35	27	28
Spear Fighter	40	22	15	23	22	21	22	21
Spear Master	60	34	25	33	32	29	30	29
Swordmaster	55	30	28	32	35	33	27	31
Villager	35	19	15	19	19	22	18	15`

let nohrianModifiers = `Adventurer	50	27	31	27	34	27	25	34
Berserker	70	40	25	32	33	25	27	25
Bow Knight	55	29	25	32	33	30	27	32
Cavalier	40	22	15	21	20	24	22	21
Dark Knight	55	32	31	28	27	31	34	30
Dark Mage	35	19	24	16	19	18	19	22
Fighter	45	25	15	23	22	21	19	18
General	70	38	25	32	25	32	40	30
Great Knight	65	35	25	29	27	28	37	28
Hero	60	32	25	35	32	31	30	27
Knight	45	24	15	22	17	22	26	18
Maid, Butler	50	28	31	33	33	32	29	29
Malig Knight	55	31	30	28	27	25	31	31
Mercenary	40	22	15	24	22	20	21	19
Nohr Noble	60	32	31	28	32	27	29	32
Nohr Prince(ss)	40	23	17	19	21	22	21	19
Outlaw	35	19	18	20	24	18	17	22
Paladin	60	31	26	30	30	32	32	32
Sorcerer	50	25	35	26	29	26	29	33
Strategist	45	25	33	28	31	33	25	32
Troubadour	35	16	19	24	20	23	16	21
Wolfskin	45	24	15	18	22	17	21	15
Wolfssegner	65	36	25	29	31	26	32	26
Wyvern Lord	60	33	25	33	29	28	35	26
Wyvern Rider	40	22	17	21	20	19	24	15`

let otherModifiers = `Astral Dragon	60	28	35	29	33	35	30	35
Automaton	60	28	25	34	33	20	29	33
Ballistician	50	39	25	31	25	32	27	26
Blight Dragon	80	40	40	40	40	40	40	40
Cleric	50	27	33	27	32	34	27	34
Dark Falcon	45	27	32	28	33	32	26	34
Empty Vessel	80	40	40	40	40	40	40	40
Faceless	70	30	27	29	31	25	36	32
Feral Dragon	60	32	31	28	32	27	29	32
Grandmaster	55	31	33	33	29	26	28	33
Great Lord	60	30	25	32	34	35	29	31
Lancer	60	31	25	29	29	30	31	29
Lodestar	60	29	26	35	33	40	30	29
Lord	60	33	25	30	31	34	32	29
Nohrian King	80	40	40	40	40	40	40	40
read Fighter	55	32	28	29	31	26	29	34
Silent Dragon (1)	80	40	40	40	40	40	40	40
Silent Dragon (2)	80	40	40	40	40	40	40	40
Stoneborn	70	40	25	25	25	20	40	28
Vanguard	65	36	25	29	30	30	32	27
Witch	50	25	36	27	34	28	26	29`

let hoshidanClasses = processChars(hoshidanModifiers)
let nohrianClasses = processChars(nohrianModifiers)
let otherClasses = processChars(otherModifiers)