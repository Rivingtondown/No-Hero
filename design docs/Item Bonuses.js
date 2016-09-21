//item stat parameter array for reference
var params = ["MHP", "MMP", "ATK", "DEF", "MAT", "MDF", "AGI", "LUK"];

//**************************************************//
//***************** Global Suffixes ****************//
//**************************************************//

//of the Wolf
//Increases Strength by 1 for every four character levels (average of the party).
<Prefix Suffix Effect>
var atkBonus = Math.floor(this.averagePartyLevel() / 4);
if (atkBonus > 0) {
    newItem.params[2] += atkBonus;
    newItem.name += " (+" + atkBonus + ")";
    newItem.price += atkBonus*10;
}
</Prefix Suffix Effect>

//of the Eagle
//Increases Magic Attack by 1 for every four character levels (average of the party).
<Prefix Suffix Effect>
var matBonus = Math.floor(this.averagePartyLevel() / 4);
if (matBonus > 0) {
    newItem.params[4] += matBonus;
    newItem.name += " (+" + matBonus + ")";
    newItem.price += matBonus*10;
}
</Prefix Suffix Effect>

//of the Monkey
//Increases Agility by 1 for every four character levels (average of the party).
<Prefix Suffix Effect>
var agiBonus = Math.floor(this.averagePartyLevel() / 4);
if (agiBonus > 0) {
    newItem.params[6] += agiBonus;
    newItem.name += " (+" + agiBonus + ")";
    newItem.price += agiBonus*10;
}
</Prefix Suffix Effect>

//of the Fox
//Increases Luck by 2 for every four character levels (average of the party).
<Prefix Suffix Effect>
var lckBonus = Math.floor(this.averagePartyLevel() / 4)*2;
if (agBonus > 0) {
    newItem.params[7] += lckBonus;
    newItem.name += " (+" + lckBonus/2 + ")";
    newItem.price += (lckBonus/2)*10;
}
</Prefix Suffix Effect>

//of the Ox
//Increases Attack by 2 and decreases Agility by 2 for every four character levels (average of the party)
<Prefix Suffix Effect>
var atkagiBonus = Math.floor(this.averagePartyLevel() / 4)*2;
if (atkagiBonus > 0) {
    newItem.params[2] += atkagiBonus;
    newItem.params[6] -= atkagiBonus;
    newItem.name += " (+" + atkagiBonus/2 + ")";
    newItem.price += (atkagiBonus/2)*10;
}
</Prefix Suffix Effect>

//of the Badger
//Increases Agility by 2 and decreases Luck by 4 for every four character levels (average of the party)
<Prefix Suffix Effect>
var agiBonus = Math.floor(this.averagePartyLevel() / 4)*2;
var lckBonus = Math.floor(this.averagePartyLevel() / 4)*4;
if (agiBonus > 0) {
    newItem.params[6] += agiBonus;
    newItem.params[7] -= lckBonus;
    newItem.name += " (+" + agiBonus/2 + ")";
    newItem.price += (agiBonus/2)*10;
}
</Prefix Suffix Effect>

//of the Owl
//Increases Magic Attack by 2 and decreases Agility by 2 for every four character levels (average of the party).
<Prefix Suffix Effect>
var matBonus = Math.floor(this.averagePartyLevel() / 4)*2;
var agiBonus = Math.floor(this.averagePartyLevel() / 4)*2;
if (matBonus > 0) {
    newItem.params[4] += matBonus;
    newItem.params[6] += agiBonus;
    newItem.name += " (+" + matBonus/2 + ")";
    newItem.price += (matBonus/2)*10;
}
</Prefix Suffix Effect>


//**************************************************//
//**************** Weapon Prefixes *****************//
//**************************************************//

//Burning
//Element of Fire

//Drowned
//Element of Water

//Static
//Element of Lightning

//Viper's
//Chance to apply Poison state to enemy

//Vorpal
//Chance to apply Defense debuff to enemy

//Reliable
//Increased chance to hit

//Deflecting
//Small chance to parry an attack, deflecting all damage

//**************************************************//
//**************** Armor Prefixes *****************//
//**************************************************//

//Sturdy
//Increases Defense by 2 for every four character levels (average of the party).
<Prefix Suffix Effect>
var defBonus = Math.floor(this.averagePartyLevel() / 4)*2;
if (defBonus > 0) {
    newItem.params[3] += defBonus;
    newItem.name += " (+" + defBonus + ")";
    newItem.price += (defBonus/2)*10;
}
</Prefix Suffix Effect>

//Reflective
//Increases Magic Defense by 2 for every four character levels (average of the party).
<Prefix Suffix Effect>
var mdfBonus = Math.floor(this.averagePartyLevel() / 4)*2;
if (defBonus > 0) {
    newItem.params[5] += mdfBonus;
    newItem.name += " (+" + mdfBonus + ")";
    newItem.price += (mdfBonus/2)*10;
}
</Prefix Suffix Effect>

//Crimson
//Increases max HP by 15 for every four character levels (average of the party).
<Prefix Suffix Effect>
var hpBonus = Math.floor(this.averagePartyLevel() / 4)*15;
if (hpBonus > 0) {
    newItem.params[0] += hpBonus;
    newItem.name += " (+" + hpBonus + ")";
    newItem.price += (hpBonus/15)*10;
}
</Prefix Suffix Effect>

//Glowing
//Increases max MP by 15 for every four character levels (average of the party).
<Prefix Suffix Effect>
var mpBonus = Math.floor(this.averagePartyLevel() / 4)*15;
if (mpBonus > 0) {
    newItem.params[1] += mpBonus;
    newItem.name += " (+" + mpBonus + ")";
    newItem.price += (mpBonus/15)*10;
}
</Prefix Suffix Effect>
