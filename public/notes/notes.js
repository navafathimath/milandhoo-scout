/* Scout Standard study notes (9th Raa Scout Group / Hulhudhuffaaru School), rewritten for easy reading.
   Each topic: sections of blocks. Block types:
   p (paragraph) · key (key points list) · warn (safety warning) · tip · img {src, cap} · steps [{img, x}] · imgs [{src, cap}] · gloss [[word, meaning]] */
window.SCOUT_NOTES = [
  { id:'cooking', title:'Cooking', icon:'fire', color:'#C2410C', summary:'Maldivian meals for a group of four, served with dessert and drinks.', keys:['cook'], preview:true,
    sections:[{ id:'meals', title:'Local meals' }] },
  { id:'road', title:'Road Safety', icon:'alert', color:'#B45309', summary:'Points to remember when walking, crossing and cycling.', keys:['road','cycl','traffic'], preview:true,
    sections:[{ id:'points', title:'Points to remember' }] },
  { id:'firstaid', title:'First Aid', icon:'heart', color:'#B5483F', summary:'Golden rules, pulse, bleeding, wounds, burns, bites and stings.', keys:['first aid','ambulance','life saver'], preview:true,
    sections:[{ id:'rules', title:'Golden rules' },{ id:'pulse', title:'Diagnosis & pulse' },{ id:'bleeding', title:'Controlling blood loss' },{ id:'wounds', title:'Wounds & infection' },{ id:'fainting', title:'Fainting & sprains' },{ id:'burns', title:'Burns' },{ id:'bites', title:'Bites & stings' },{ id:'glossary', title:'Glossary' }] },
  { id:'bandages', title:'Triangular Bandages', icon:'shield', color:'#7C3AED', summary:'Folds, slings and bandages for head, hand, elbow, knee and foot.', keys:['bandage','sling','first aid','ambulance'], preview:true,
    sections:[{ id:'folds', title:'Folding & storing' },{ id:'slings', title:'Slings' },{ id:'bandaging', title:'Bandaging' },{ id:'roller', title:'Roller bandages' }] },
  { id:'knots', title:'Knots & Lashing', icon:'knot', color:'#0D78B6', summary:'Care of rope, key knots, trestles and step-by-step lashings.', keys:['knot','lash','pioneer','rope'],
    sections:[
      { id:'rope-care', title:'Care of rope', blocks:[
        { t:'p', x:'Get a piece of rope about one inch around and about 20 feet long. A short piece is of little or no practical use.' },
        { t:'tip', x:'You will use this rope for a long time as part of your regular equipment — treat it carefully and prepare it for hard service.' } ] },
      { id:'rope-parts', title:'Parts of a rope', blocks:[
        { t:'p', x:'A rope has no head, body or tail. To describe knot tying, think of it as having three sections: two ends and a standing part.' },
        { t:'key', title:'Which parts form a knot', items:['Two ends — reef knot','The end and the standing part — bowline','The standing part alone — sheep shank'] },
        { t:'p', x:'Even the most complex knot is a combination of three basic turns: a bight, a loop or an overhand.' },
        { t:'img', src:'notes/knots/rope-parts.png', cap:'Bight, end, standing part, overhand loop, underhand loop and overhand knot' } ] },
      { id:'timber-hitch', title:'Timber hitch', blocks:[
        { t:'img', src:'notes/knots/timber-hitch.png', cap:'Timber hitch', side:true },
        { t:'p', x:'An important hitch that holds firmly and can be tied and untied quickly.' },
        { t:'key', title:'Used for', items:['Drawing two spars together when starting a diagonal lashing','Fastening a rope to a spar for a short time, to haul it up or along'] },
        { t:'warn', x:'It holds only while steady tension is kept on the rope. If you haul a spar pointing in one direction, first put a half hitch on the spar in the direction you want it to point.' },
        { t:'steps', items:[{ x:'Take a turn around the spar.' },{ x:'Bend the rope back around itself and twist the end two or three times.' },{ x:'Pull on the standing part to tighten.' }] } ] },
      { id:'fishermans-knot', title:'Fisherman’s knot', blocks:[
        { t:'img', src:'notes/knots/fishermans-knot.png', cap:'Fisherman’s knot' },
        { t:'p', x:'Used by fishermen to join two pieces of gut, which would not hold with a reef knot or a sheet bend. Also good for joining thin twine when the normal method would slip.' },
        { t:'warn', x:'This knot tends to jam, so it is difficult to untie.' },
        { t:'steps', items:[{ x:'Lay the two pieces alongside each other, ends pointing in opposite directions.' },{ x:'Make an overhand knot in each end around the standing part of the other.' },{ x:'Pull the standing parts in opposite directions to draw the two overhand knots together.' }] } ] },
      { id:'lashing', title:'Lashing', blocks:[
        { t:'p', x:'Most camp improvements need sticks or poles tied together with lashings. Use binder twine, cord or rope, depending on the thickness of the wood and the size of the project.' },
        { t:'key', title:'Words to know', items:['Wrapping — turns of the rope around the poles to hold them together. Every lashing starts with wrapping.','Frapping — turns of the rope between the poles to tighten the wrapping. Some lashings need it.'] },
        { t:'key', title:'What you can build with lashings', items:['Cloth hangers and towel racks','A raised fireplace and a dining table','Tent poles, so you can pitch a tent without them','A flag pole','At troop and council camps: a signal tower or a monkey bridge'] } ] },
      { id:'trestles', title:'Three types of trestle', blocks:[
        { t:'p', x:'Three types of trestle are mainly used in pioneering projects: the A-trestle, the X-trestle and the H-trestle.' },
        { t:'img', src:'notes/knots/trestles.png', cap:'A-trestle, X-trestle and H-trestle' } ] },
      { id:'diagonal', title:'Diagonal lashing', blocks:[
        { t:'p', x:'Used to “spring” two spars together. It starts with a timber hitch around both spars, tightened to draw the spars together.' },
        { t:'steps', items:[
          { img:'notes/knots/diag-01.png', x:'Tie a timber hitch around both spars.' },
          { img:'notes/knots/diag-02.png', x:'Pull tight and start the first wrap.' },
          { img:'notes/knots/diag-03.png', x:'Make 3 to 4 wrappings, keeping them parallel.' },
          { img:'notes/knots/diag-04.png', x:'Pull each wrapping tight, then start the second wrapping.' },
          { img:'notes/knots/diag-05.png', x:'Make 3 to 4 wrappings the other way.' },
          { img:'notes/knots/diag-06.png', x:'Start frapping — the first frapping turn.' },
          { img:'notes/knots/diag-07.png', x:'Make 2 to 3 frappings.' },
          { img:'notes/knots/diag-08.png', x:'Make a half hitch and pull each frapping tight.' },
          { img:'notes/knots/diag-09.png', x:'Make a second half hitch and work it tight.' },
          { img:'notes/knots/diag-10.png', x:'Finish with a clove hitch and work it tight.' } ] } ] },
      { id:'square', title:'Square lashing', blocks:[
        { t:'p', x:'Used whenever spars cross at an angle, touching each other where they cross.' },
        { t:'steps', items:[
          { x:'Start with a clove hitch around the upright spar, just below the horizontal spar.' },
          { x:'Take the rope in front of and up over the horizontal bar.' },
          { x:'Pass it behind the upright spar, down in front of the horizontal spar, and around behind the upright spar just above the clove hitch.' },
          { x:'Repeat three or four times — outside the previous turns on the horizontal, inside on the upright.' },
          { x:'Take three or four frapping turns.' },
          { x:'Finish with a clove hitch on the horizontal spar, snugged and slid up close to the lashing.' } ] },
        { t:'img', src:'notes/knots/square-lashing.png', cap:'Square lashing: starting clove hitch, wrapping and the finished lashing' } ] }
    ] }
];
