/* Scout Standard study notes (9th Raa Scout Group / Hulhudhuffaaru School), rewritten for easy reading.
   Every point from the original notes is kept; spelling is corrected. Each topic: sections of blocks.
   Block types: p (paragraph) · key {title, items} · warn · tip · img {src, cap, side} · steps [{img, x}] · gloss [[word, meaning]]
   keys: words that link a topic to badges and syllabus items with matching names. */
window.SCOUT_NOTES = [
  { id:'cooking', title:'Cooking', icon:'fire', color:'#C2410C', summary:'Maldivian meals for a group of four, served with dessert and drinks.', keys:['cook'],
    sections:[
      { id:'meals', title:'Local meals for a group of 4', blocks:[
        { t:'p', x:'Know how to make common local meals and serve them to a group of 4.' },
        { t:'key', title:'Maldivian breakfast — for example', items:['Mashuni and roshi','Fish curry and roshi'] },
        { t:'key', title:'Maldivian lunch — for example', items:['White rice and garudhiya','Masbai and rihaakuru','Bambukeyo bai and fish curry'] },
        { t:'key', title:'Serve lunch with', items:['A salad — for example fruit salad or vegetable salad','A dessert — for example fruit cocktail or custard','Two types of drink — for example mango juice and watermelon juice'] },
        { t:'tip', x:'These are only examples. The examiner will tell you which meals to prepare.' } ] },
      { id:'logbook', title:'Your log book', blocks:[
        { t:'key', title:'Write in your log book', items:['Detailed notes and diagrams on the meals you are asked to prepare','A report on the cooking'] } ] }
    ] },
  { id:'road', title:'Road Safety', icon:'alert', color:'#B45309', summary:'Points to remember when walking, crossing, cycling and riding.', keys:['road','cycl','traffic'],
    sections:[
      { id:'walking', title:'Walking and crossing', blocks:[
        { t:'key', items:['Always walk on the pavement.','Always use the zebra crossing to cross the road.','Look for vehicles before you cross the road.'] } ] },
      { id:'riding', title:'Riding', blocks:[
        { t:'key', items:['When riding any vehicle, always ride on the left side of the road.','To overtake, pass on the right side.','Stop when anyone is crossing.','Obey traffic signs.'] } ] },
      { id:'bicycle', title:'Your bicycle', blocks:[
        { t:'key', items:['Keep your bicycle properly equipped and in perfect repair.','Choose a bicycle that fits you properly.','Use lights when riding at night (6 pm to 6 am). They must be attached to the bicycle.'] },
        { t:'warn', x:'Your bicycle is for travel, not something to fool around on.' } ] },
      { id:'signs', title:'Road signs', blocks:[
        { t:'p', x:'Learn these common road signs.' },
        { t:'img', src:'notes/road/signs.png', cap:'Common road signs' } ] }
    ] },
  { id:'firstaid', title:'First Aid', icon:'heart', color:'#B5483F', summary:'Golden rules, pulse, bleeding, wounds, burns, bites and stings.', keys:['first aid','ambulance','life saver'],
    sections:[
      { id:'what', title:'What first aid is', blocks:[
        { t:'tip', x:'“First aid is the emergency care of the injured or sick.”' },
        { t:'p', x:'It is based on current medical and surgical principles. It begins as soon as the first aider arrives on the scene and continues until the casualty is seen by a doctor, taken to hospital or home, or has fully recovered.' },
        { t:'key', title:'First aid aims to', items:['Preserve life','Promote recovery','Prevent the injury or illness from becoming worse'] },
        { t:'p', x:'First aid is limited to help at the time of the emergency; it does not include re-dressing injuries later. A first aider must work with other first aiders and bystanders, and be ready to help with medical aid if needed.' },
        { t:'p', x:'People react differently to injury and illness. Be ready for these differences and adapt how you handle each casualty.' },
        { t:'p', x:'Medical aid is treatment by a doctor — on the spot, at home or in hospital.' } ] },
      { id:'rules', title:'Golden rules of first aid', blocks:[
        { t:'steps', items:[{ x:'Quickly assess the whole situation.' },{ x:'Remove the cause if it is still active, or move the casualty away from the danger.' },{ x:'Act with quiet confidence.' },{ x:'Check for a pulse.' },{ x:'Check for breathing.' },{ x:'Control any bleeding (haemorrhage).' },{ x:'Assess how conscious the casualty is.' },{ x:'Treat injuries in order of how serious they are.' },{ x:'Reassure the casualty.' },{ x:'Handle the casualty gently.' },{ x:'Remove clothing if necessary.' },{ x:'Arrange for the casualty to be taken to safety or medical aid.' }] },
        { t:'key', title:'The scope of first aid', items:['To make a diagnosis','To decide the nature and extent of treatment needed, and start it properly','To arrange for the casualty to be taken to safety or medical aid'] } ] },
      { id:'diagnosis', title:'Diagnosis and treatment', blocks:[
        { t:'p', x:'A first aider looks at the history, symptoms and signs to work out the cause.' },
        { t:'key', title:'History — the story of the accident or illness, from', items:['The casualty','Witnesses','The evidence around you — for example a crash scene. It may also show that the person has a particular illness.'] },
        { t:'key', title:'Symptoms and signs', items:['Symptoms are what the casualty feels and tells you — for example pain, faintness, thirst.','Signs are differences from normal that you can find — for example raised temperature, a rapid pulse, marks.'] },
        { t:'key', title:'Treatment', items:['Remove the cause if still active, or move the casualty away from the danger.','Sustain life: restore circulation and breathing, control bleeding, lessen shock.','Stop the condition getting worse: cover wounds, immobilise fractures, place the casualty in the best position.','Promote recovery: reassure, relieve pain, handle gently, protect from the weather. Improvise if necessary.','Arrange transport to medical aid, hospital or home.'] } ] },
      { id:'pulse', title:'Circulation and pulse', blocks:[
        { t:'p', x:'The pulse shows the state of the circulation. It is the pressure wave that passes along the arteries each time the lower chambers of the heart contract and squeeze out blood.' },
        { t:'p', x:'Its rate and strength vary a lot — from slow and thudding to rapid, weak and fluttering. A rapid, weak pulse is typical of shock and can be hard to feel, especially if your own heart is racing and your pulse is stronger than the casualty’s.' },
        { t:'img', src:'notes/firstaid/pressure-points.png', cap:'Pulse and pressure points of the body' },
        { t:'steps', items:[{ x:'The pulse is normally taken at the wrist, where you can feel the radial artery.' },{ x:'Rest your fingertips lightly on the front of the wrist, just at the edge on the thumb side. Move your fingers until you find it.' },{ x:'Count it using a watch with a second hand. A normal pulse is 70 to 80 beats per minute.' },{ x:'Note whether it is regular, easy to feel, full, weak or unsteady, and record it.' }] },
        { t:'warn', x:'Never feel a pulse with your thumb — it is less sensitive and has a pulse of its own.' },
        { t:'p', x:'Four places to take a pulse: radial (wrist), apical (heart), brachial (upper arm) and carotid (neck).' },
        { t:'steps', items:[{ img:'notes/firstaid/pulse-radial.png', x:'Radial pulse' },{ img:'notes/firstaid/pulse-apical.png', x:'Apical pulse' },{ img:'notes/firstaid/pulse-brachial.png', x:'Brachial pulse' },{ img:'notes/firstaid/pulse-carotid.png', x:'Carotid pulse' }] } ] },
      { id:'bleeding', title:'Controlling blood loss', blocks:[
        { t:'p', x:'Slow the flow of blood to the wound so that it can clot. This is done by pressure and by raising (elevating) the injured part.' },
        { t:'key', title:'Two kinds of pressure', items:['Direct pressure — on the wound itself. Always try this first.','Indirect pressure — on the artery that supplies the area. Use it only if direct pressure fails or is impossible.'] },
        { t:'p', x:'Direct pressure flattens the blood vessels and slows the flow so clots can form. Keep it up for 5–15 minutes, because the bleeding takes time to stop. If something is stuck in the wound, press alongside it. If possible, also raise and support the injured part — this lowers the blood pressure there.' },
        { t:'steps', items:[
          { img:'notes/firstaid/bleed-1.png', x:'Cover the wound with a sterile dressing and press directly with your thumb or fingers. No dressing? Press with your bare hand. If the wound gapes, squeeze the edges together gently but firmly.' },
          { x:'Lay the casualty down comfortably. Raise the injured part as high as possible and support it.' },
          { img:'notes/firstaid/bleed-3.png', x:'Apply enough padding to go beyond the edges of the wound — around a limb, all the way round.' },
          { img:'notes/firstaid/bleed-4.png', x:'Press the padding down and bandage firmly enough to control bleeding, but not so tight that it cuts off circulation. Keep the injured part still.' }] },
        { t:'key', title:'Also remember', items:['If the casualty is able, ask them to press on the wound themselves.','No sterile dressing? Improvise one from clean material.','If bleeding continues, add more padding and bandage firmly. Do not remove the first dressing — it may restart the bleeding.'] } ] },
      { id:'indirect', title:'Indirect pressure (pressure points)', blocks:[
        { t:'p', x:'If direct pressure does not stop the bleeding, or cannot be used (for example with severe cuts), you may control bleeding from an artery in a limb by pressing at a pressure point — where an artery can be pressed against a bone.' },
        { t:'warn', x:'This cuts off blood to the whole limb. Use it only as a last resort, and never for longer than 15 minutes.' },
        { t:'img', src:'notes/firstaid/brachial-pressure.png', cap:'Pressing the brachial artery', side:true },
        { t:'key', title:'The two pressure points', items:['Brachial artery (arm): runs along the inner upper arm, roughly following the sleeve seam. Put your hand under the arm, slide your fingers between the muscles and press up and in against the bone.','Femoral artery (leg): enters the leg at the middle of the groin fold. Lay the casualty down with the knee bent and press the artery against the bone with your thumbs, fist or heel of your hand.'] },
        { t:'img', src:'notes/firstaid/arteries.png', cap:'Brachial and femoral arteries' } ] },
      { id:'wounds', title:'Wounds and infection', blocks:[
        { t:'p', x:'A wound is a break in the body’s tissues.' },
        { t:'key', title:'Aims of treatment', items:['Stop the bleeding','Prevent or reduce infection','Rest the casualty'] },
        { t:'key', title:'Treatment', items:['Rest the casualty and the injured part. Raise it — unless a limb is broken; then only once the fracture is properly immobilised.','Clean and dress the wound, taking great care to prevent infection.','Handle every wound gently.','Reassure the casualty and watch for signs of fainting.'] },
        { t:'p', x:'Infection is when harmful organisms (germs) get into body tissues and grow.' },
        { t:'key', title:'Germs can enter a wound', items:['At the time of injury — from dirt on the wound or on the object that caused it','Afterwards — from careless handling','Afterwards — from people breathing, sneezing or coughing on it (droplet infection)'] },
        { t:'p', x:'The body fights back by sending more blood, with cells and antibodies that kill germs. This is inflammation: the area becomes hot, red, swollen and painful, and may throb. Pus — germs, white blood cells and dead tissue — may form. Some germs spread to the lymph glands, where white blood cells attack them. Red streaks leading away from an infected area are inflamed lymph channels.' } ] },
      { id:'prevent', title:'Preventing infection', blocks:[
        { t:'p', x:'The only sure way is to keep germs out — or, if the wound is already dirty, to clean it thoroughly. You cannot stop germs entering at the moment of injury, but correct handling stops more getting in.' },
        { t:'key', title:'What to do', items:['Cover the wound as soon as possible with a sterile or clean dressing, and keep it covered.','Germs are invisible — even clean-looking hands carry many. Touch the wound with bare hands only if you must to stop severe bleeding.','Do not touch the side of the dressing that goes on the wound.','Do not breathe, cough, sneeze or talk towards the wound or dressing.','You may rinse it first with water — cooled boiled water is best, but tap water will do.'] },
        { t:'tip', x:'Only thorough cleaning by a doctor or hospital removes germs that entered at the time of injury. The sooner, the better — get medical attention as soon as possible.' } ] },
      { id:'foreign', title:'Foreign bodies in a wound', blocks:[
        { t:'p', x:'Gently remove small objects on the surface of a wound if they wipe off easily with a swab or rinse off with cold water.' },
        { t:'warn', x:'Never pull out a large object stuck in the wound. It may be plugging the wound and limiting bleeding, and pulling it out can damage the tissue around it.' },
        { t:'steps', items:[
          { img:'notes/firstaid/fb-1.png', x:'Control bleeding: raise the part and press firmly, squeezing the wound edges together alongside the object. Let the casualty do this if they can.' },
          { img:'notes/firstaid/fb-2.png', x:'Gently lay a piece of gauze over and around the object.' },
          { img:'notes/firstaid/fb-3a.png', x:'Put crescent-shaped pads of cotton wool (or similar) around the wound, building them up higher than the object if you can. Secure with a firm bandage.' },
          { img:'notes/firstaid/fb-3b.png', x:'If you cannot build the padding high enough, leave the object sticking out and bandage diagonally — never over the object.' },
          { x:'Keep the part raised and as still as possible.' },
          { x:'Arrange urgent transport to hospital, keeping the casualty in the treatment position.' }] },
        { t:'key', title:'Also remember', items:['If severe bleeding continues, lay the casualty down and raise the part. If it still continues, use indirect pressure.','If someone is impaled on railings or spikes, do not lift them off. Support the weight of their limbs and body and call an ambulance immediately.'] } ] },
      { id:'fainting', title:'Fainting, black eye and nose bleed', blocks:[
        { t:'p', x:'Fainting is so common that you are almost sure to deal with it. It happens when the brain suddenly gets too little blood. Hunger, tiredness, bad air, standing too long, fear, bad news or the sight of blood can all make some people faint.' },
        { t:'p', x:'A person about to faint turns pale, may wobble, or may suddenly fall to the ground.' },
        { t:'key', title:'Fainting — what to do', items:['The best first aid is prevention.','Have them sit and bend forward with the head as low as possible, between the knees.','Keep a fainted person lying down for a few minutes. Loosen the collar and sprinkle water on the face.','If they do not come round quickly, send for a doctor at once.'] },
        { t:'key', title:'Black eye', items:['Bruising around the eye, with normal vision.','A cold compress relieves the discomfort.'] },
        { t:'img', src:'notes/firstaid/nosebleed.png', cap:'Pinching the soft part of the nose', side:true },
        { t:'p', x:'Nose bleeds are often minor in children but more serious in older people.' },
        { t:'steps', items:[{ x:'Sit the casualty leaning forward over a bowl.' },{ x:'Pinch the soft part of the nose firmly for 10 minutes.' },{ x:'Breathe through the mouth and spit any blood into the bowl. Sucking an ice lolly also helps reduce the bleeding.' },{ x:'Release after 10 minutes. If it is still bleeding, pinch for another 10 minutes.' },{ x:'If it is still bleeding after 30 minutes, get medical aid.' }] },
        { t:'warn', x:'When the bleeding stops, do not blow the nose for 24 hours.' } ] },
      { id:'sprain', title:'Sprains and strains — R.I.C.E.', blocks:[
        { t:'p', x:'A sprain is a partly or fully torn ligament across a joint. It is painful and the joint swells. If the injury is severe, a bone may be broken. A strain is different — an overstretched muscle — but both are treated the same way.' },
        { t:'key', title:'R.I.C.E.', items:['Rest — in the most comfortable position','Ice — an ice pack or ice water for at least 30 minutes','Compress — with a crepe bandage','Elevate — raise the injured part'] },
        { t:'tip', x:'Simple painkillers such as paracetamol may be given, and a medical check arranged.' } ] },
      { id:'burns', title:'Burns', blocks:[
        { t:'key', title:'Rescuing someone whose clothes are on fire', items:['Approach holding a rug, blanket or coat in front of you.','Wrap it around them, lay them flat and smother the flames.','In a fire, cover your nose and mouth with a wet cloth to keep superheated air out of your airway.','Move keeping as low as possible — the coolest, cleanest air is near the ground.','Open doors cautiously to avoid a blast of flame and hot air.','Switch off any electricity before putting water on flames.','Tear off smouldering clothes.'] },
        { t:'p', x:'For every burn: rinse with cold running water, then apply cold compresses to reduce swelling and pain. Burnt skin leaks fluid (serum), which encourages germs, so handle it cleanly and cover it with a clean (ideally sterile) dressing.' },
        { t:'key', title:'Superficial burns — reddening and small blisters', items:['Wash with cold water.','Apply a sterile dressing and bandage firmly.'] },
        { t:'key', title:'Deep burns', items:['Remove or cut away clothing over the burn, but leave anything stuck to it.','Wash with plenty of cold water.','Cover with a sterile or clean dressing and bandage securely. Cover large burns with a clean sheet or towel.','For burns to the face, make sure the airway stays open.','If the casualty is thirsty or help is delayed, give small sips of water or tea — unless they are unconscious or medical aid is close.','Take the casualty to medical aid without delay.'] },
        { t:'warn', x:'Do not put lotion, ointment or oily dressings on a burn, and do not burst blisters.' },
        { t:'key', title:'Sunburn', items:['Long exposure to the sun can cause large superficial burns with blisters.','Without blisters: apply cool, moist compresses, rest in a cool place and give plenty of fluids.','Severe blistering needs medical attention after this.'] },
        { t:'key', title:'Chemical burns', items:['Wash off immediately with lots of water.','Remove contaminated clothing without getting it on yourself.','If available, neutralise — baking soda solution for acids, diluted vinegar for alkalis.','Apply a dressing.'] } ] },
      { id:'electric', title:'Electrical burns and shocks', blocks:[
        { t:'key', title:'Electric current can', items:['Stop the heart','Make muscles contract, so the casualty cannot let go','Stop breathing by paralysing the breathing centre, or by fixing the chest','Cause burns'] },
        { t:'steps', items:[{ x:'Shout for help.' },{ x:'Switch off the current, or move the casualty away from it (see below).' },{ x:'No pulse and no breathing: start chest compressions and mouth-to-mouth (or mouth-to-nose) breathing.' },{ x:'Pulse but no breathing: start mouth-to-mouth (or mouth-to-nose) breathing.' },{ x:'Put a simple dressing on the burn.' },{ x:'Get the casualty to medical aid, and stay with them until it arrives.' }] },
        { t:'key', title:'Breaking contact — household voltage', items:['Switch off the current, or pull the plug out of the socket. Do not cut the cable.','If you cannot, push the casualty away using only dry, insulating materials.','Moisture conducts electricity — if the ground or skin is wet, the danger is greater.','Smother electrical fires with dry materials. Never use water until the power is off.'] },
        { t:'key', title:'Good insulating materials', items:['Thick rubber gloves','A coat','A piece of dry wood','A folded newspaper','If nothing else works, stand on dry wood or paper and kick the casualty free.'] },
        { t:'warn', x:'With high voltage, do not try to rescue the casualty until the authorities have switched off the current.' } ] },
      { id:'bites', title:'Bites and stings', blocks:[
        { t:'key', title:'Mosquito and sandfly bites', items:['A weak alkaline solution — ammonia or bicarbonate of soda — gives relief.','Calamine lotion or zinc cream is recommended.','Avoid hot water.'] },
        { t:'key', title:'Bee, hornet and wasp stings', items:['Scrape the sting out sideways with a fingernail. It has a barb — pulling it straight out injects more venom.','Wipe the area clean.','Apply a cold compress.'] } ] },
      { id:'shark', title:'Shark attack injuries', blocks:[
        { t:'p', x:'Shark attacks on people are uncommon. Sharks are cold-blooded: warmth excites them and cold calms them. They rarely attack unless the water is at least 70 °F (21 °C). Muddy or discoloured water and struggling hooked fish make attacks more likely. (The original notes give the Australian example: along the southern coast, attacks happen mostly December–March; further north, for longer.)' },
        { t:'key', title:'Sharks injure by', items:['Biting — the jaws can bite through bone, even the thigh bone, and tear away large amounts of flesh with heavy bleeding','Impact','Cutting with the fins','The powerful kick of the tail'] },
        { t:'steps', items:[{ x:'Control bleeding at once. In the water, press hard into or just above the spurting points with your fingers.' },{ x:'Once ashore, lay the casualty down with the head low.' },{ x:'Pack the wound with any clothing (towel, shirt…) until it is covered and overlapped, and keep pressing until a firm bandage is on.' },{ x:'Raise the part if possible. If packing does not stop the bleeding, press by hand or use a constrictive bandage.' },{ x:'Call for medical aid immediately.' }] },
        { t:'warn', x:'Do not move the casualty without medical advice. Any moving or handling must be gentle.' } ] },
      { id:'marine', title:'Marine stings', blocks:[
        { t:'p', x:'Sea and freshwater creatures sting by injecting venom through the skin, or through tentacles with stinging cells. Effects range from sharp pain to rapid collapse and death.' },
        { t:'key', title:'Venomous spines', items:['Puncture wounds are usually on the legs, feet or hands.','The venom stays active after the fish dies — handling or stepping on a dead fish can still sting.'] },
        { t:'key', title:'Symptoms and signs', items:['Severe burning or throbbing at the puncture, with pain along the lymph channels','The spine may be visible in the wound','The skin turns pale, then blue, then red','The limb swells; there may be heavy bleeding','Sweating, then shock, is common','Stonefish, cone shells and blue-ringed octopus can stop breathing and paralyse muscles'] },
        { t:'steps', items:[{ x:'Keep the casualty breathing.' },{ x:'Treat for shock.' },{ x:'Get medical aid immediately.' }] },
        { t:'key', title:'Cone shell and stonefish — also', items:['Clean the wound with water and remove any foreign bodies.','Stonefish only: apply a constrictive bandage and put the part in hot water — test the water on an uninjured limb so you do not burn the casualty. Stonefish antivenom is available.'] } ] },
      { id:'glossary', title:'Glossary', blocks:[
        { t:'gloss', items:[['Fainting','A brief loss of consciousness'],['Organisms','Germs'],['Antibodies','Protective substances in the tissues'],['Antiseptic','A substance that kills germs']] } ] }
    ] },
  { id:'bandages', title:'Triangular Bandages', icon:'shield', color:'#7C3AED', summary:'Folds, slings, and triangular and roller bandages for every part of the body.', keys:['bandage','sling','first aid','ambulance'],
    sections:[
      { id:'about', title:'About triangular bandages', blocks:[
        { t:'p', x:'Make one by cutting a square of linen or calico (at least 1 m square) diagonally in half, or buy them — often in sterile packs.' },
        { t:'key', title:'Uses', items:['Open (unfolded): as a sling to support or protect the arm or chest','Open: to hold dressings on the head, hand or foot','Folded: as broad-fold or narrow-fold bandages for specific needs'] },
        { t:'img', src:'notes/bandages/parts.png', cap:'Parts of a triangular bandage: point, base and two ends' } ] },
      { id:'storing', title:'Storing', blocks:[
        { t:'img', src:'notes/bandages/storing.png', cap:'Folding a bandage for storage' },
        { t:'steps', items:[{ x:'Make a narrow-fold bandage.' },{ x:'Turn the ends into the middle.' },{ x:'Keep folding the ends into the middle until it is a convenient size.' }] } ] },
      { id:'folds', title:'Broad-fold and narrow-fold', blocks:[
        { t:'p', x:'Broad-fold bandages hold limbs still during transport, or secure splints and dressings.' },
        { t:'steps', items:[{ img:'notes/bandages/broad-1.png', x:'Turn a narrow hem along the base. Fold the point down to the base.' },{ img:'notes/bandages/broad-2.png', x:'Fold the whole bandage in half again in the same direction.' }] },
        { t:'p', x:'Narrow-fold bandages secure a dressing at a joint when no other bandage is available.' },
        { t:'steps', items:[{ img:'notes/bandages/narrow-1.png', x:'Make a broad-fold bandage (steps above).' },{ img:'notes/bandages/narrow-2.png', x:'Fold it in half again in the same direction.' }] } ] },
      { id:'ring', title:'Ring pad', blocks:[
        { t:'img', src:'notes/bandages/ring-pad.png', cap:'Making a ring pad', side:true },
        { t:'steps', items:[{ x:'Using a narrow bandage, wrap one end twice around the four fingers of one hand to make a loop.' },{ x:'Pass the other end through the loop and wrap it round and round until the whole bandage is used and the ring is firm.' }] } ] },
      { id:'arm-sling', title:'Arm sling', blocks:[
        { t:'p', x:'Slings support and protect injured arms, wrists and hands, or hold an arm still when there are chest injuries. There are two types: the arm sling and the elevation sling.' },
        { t:'tip', x:'Always apply a sling from the injured side, so you can give extra support and protection.' },
        { t:'p', x:'The arm sling is for injuries to the arm and some chest injuries. It holds the forearm across the chest, and works only if the casualty sits or stands. When correct, the hand is slightly higher than the elbow and the base of the bandage is at the root of the little finger, leaving all the fingernails showing.' },
        { t:'steps', items:[
          { img:'notes/bandages/arm-1.png', x:'Sit the casualty down and support the forearm on the injured side, wrist and hand a little higher than the elbow. The casualty may be able to hold it.' },
          { x:'Slide one end of the bandage between the chest and forearm, so the point reaches well beyond the elbow.' },
          { img:'notes/bandages/arm-3.png', x:'Take the upper end over the shoulder on the uninjured side and round the back of the neck to the front of the injured side.' },
          { x:'Still supporting the forearm, bring the lower end up over the forearm and hand, leaving only the fingertips showing. Tie a reef knot on the injured side, in the hollow above the collarbone.' },
          { x:'Bring the point forward and pin it to the front of the bandage. No safety pin? Twist the point and tuck it between the bandage and the arm.' },
          { img:'notes/bandages/arm-6.png', x:'Check the circulation. If it is affected, adjust the bandage or the position of the sling.' }] } ] },
      { id:'elev-sling', title:'Elevation sling', blocks:[
        { t:'p', x:'Supports the hand and forearm well raised — for a bleeding hand, complicated chest injuries or shoulder injuries.' },
        { t:'steps', items:[
          { img:'notes/bandages/elev-1.png', x:'Sit the casualty down, supporting the injured arm. Place the forearm across the chest with the fingertips almost on the opposite shoulder.' },
          { x:'Lay an open bandage over the forearm and hand, point well beyond the elbow and the upper end over the shoulder on the uninjured side.' },
          { img:'notes/bandages/elev-3.png', x:'Supporting the forearm, ease the base of the bandage under the hand, forearm and elbow.' },
          { x:'Take the lower end round the back to the front of the uninjured shoulder.' },
          { img:'notes/bandages/elev-5.png', x:'Tie a reef knot on the uninjured side, in the hollow above the collarbone, adjusting the height if needed.' },
          { img:'notes/bandages/elev-6.png', x:'Tuck the point between the forearm and the bandage, turn the fold back and pin it. No pin? Tuck the fold over the top of the forearm.' },
          { x:'Check the circulation. If it is affected, adjust the bandage or the sling.' }] } ] },
      { id:'elbow-knee', title:'Elbow and knee', blocks:[
        { t:'img', src:'notes/bandages/elbow.png', cap:'Elbow bandage', side:true },
        { t:'steps', items:[{ x:'Open the triangular bandage with a narrow hem folded along the base.' },{ x:'Place the middle of the base on the forearm (for the knee: on the shin, below the kneecap).' },{ x:'Bring the point up over the dressing, and take the ends round the limb, crossing in front of the elbow (behind the knee).' },{ x:'Tie off on the upper part of the limb.' },{ x:'Draw the point up to put the right pressure on the dressing, then fold it down and pin it.' }] },
        { t:'img', src:'notes/bandages/knee.png', cap:'Knee bandage' } ] },
      { id:'hand', title:'Hand', blocks:[
        { t:'p', x:'Holds a light dressing on a hand injury such as a graze or burn, where no pressure is needed. For a small hand, fold a hem along the base first.' },
        { t:'steps', items:[
          { img:'notes/bandages/hand-1.png', x:'Keeping the injury uppermost, place the bandage under the hand, base at the wrist and point away from the casualty. Bring the point over the hand to the wrist.' },
          { img:'notes/bandages/hand-2.png', x:'Take the ends round the hand, cross them, and tie a reef knot over the wrist below the point.' },
          { x:'Bring the point over the knot and secure it.' },
          { x:'Check the circulation.' }] } ] },
      { id:'scalp', title:'Scalp', blocks:[
        { t:'p', x:'Holds a dressing on a scalp wound. It is not used to control bleeding.' },
        { t:'steps', items:[
          { img:'notes/bandages/scalp-1.png', x:'Fold a hem along the base. Put the base on the forehead, just above the eyebrows, with the point hanging down the back of the head.' },
          { img:'notes/bandages/scalp-2.png', x:'Take the ends round to the back of the head, just above the ears.' },
          { img:'notes/bandages/scalp-3.png', x:'Cross the ends over the point at the nape of the neck and bring them round to the front.' },
          { x:'Tie a reef knot on the forehead, close to the hem.' },
          { x:'Steady the head with one hand and gently draw the point down to take up the slack.' },
          { img:'notes/bandages/scalp-6.png', x:'Turn up the point and pin it to the bandage on top of the head.' }] } ] },
      { id:'foot', title:'Foot', blocks:[
        { t:'steps', items:[
          { img:'notes/bandages/foot-1.png', x:'Lay the open bandage flat with the point away from the casualty.' },
          { img:'notes/bandages/foot-2.png', x:'Put the foot on it with the toes towards the point, leaving enough bandage at the heel to wrap the foot.' },
          { img:'notes/bandages/foot-3.png', x:'Bring the point up over the foot to the lower leg.' },
          { img:'notes/bandages/foot-4.png', x:'Bring the ends up round the ankle, crossing over the point, and keep turning to use up any extra bandage before tying off.' },
          { img:'notes/bandages/foot-5.png', x:'Draw the point through the tie to put pressure on the dressing, then fold it down and pin it.' }] } ] },
      { id:'roller', title:'Roller bandages', blocks:[
        { t:'p', x:'The usual way is simple spiral turns, for parts of even width such as the forearm.' },
        { t:'steps', items:[
          { img:'notes/bandages/roller-1.png', x:'Put the tail of the bandage on the limb below the injury and make a firm sloping turn, from the inside of the limb outwards, to hold it.' },
          { img:'notes/bandages/roller-2.png', x:'Work up the limb in spiral turns, each covering two-thirds of the one before, with the edges parallel.' },
          { img:'notes/bandages/roller-3.png', x:'Finish with a straight turn and secure the end. Check the circulation.' }] },
        { t:'key', title:'Securing a roller bandage', items:['Finish above the dressing and fold in the end.','Secure with a safety pin, adhesive tape or a bandage clip.','None available? Leave 15 cm (6 in) or more free, split it down the middle, knot the bottom of the split and tie the two ends round the limb with a reef knot.'] },
        { t:'steps', items:[{ img:'notes/bandages/secure-1.png', x:'Pin, tape or clip' },{ img:'notes/bandages/secure-2.png', x:'Split the end' },{ img:'notes/bandages/secure-3.png', x:'Tie the ends' }] } ] },
      { id:'roller-joint', title:'Roller: elbow, knee, hand and foot', blocks:[
        { t:'p', x:'Elbow (the same method works for the knee):' },
        { t:'steps', items:[
          { img:'notes/bandages/eroll-1.png', x:'Let the casualty hold the limb comfortably. Put the tail on the inside of the elbow and make one straight turn over the elbow tip and round the limb.' },
          { x:'Go round the upper arm, covering half of the first turn, then round the forearm, covering the other edge of the first turn and touching the second.' },
          { img:'notes/bandages/eroll-3.png', x:'Keep making turns above and below, each covering a little more than two-thirds of the one before.' },
          { x:'Finish with one or two spiral turns above the elbow and secure the end.' },
          { x:'Check the circulation.' }] },
        { t:'p', x:'Hand (the same method works for the foot):' },
        { t:'steps', items:[
          { img:'notes/bandages/hroll-1.png', x:'With the palm facing down, fix the tail at the wrist with one straight turn.' },
          { x:'Take the bandage diagonally across the back of the hand to the base of the little finger, then round the palm under the fingers to the base of the nails.' },
          { img:'notes/bandages/hroll-3.png', x:'Take it up across the fingers to the root of the little fingernail, then down round the palm and diagonally across the back of the hand to the wrist.' },
          { x:'Keep making these figure-of-eight turns until the hand is covered. Finish with a spiral turn at the wrist and secure the end.' },
          { x:'Check the circulation.' }] } ] }
    ] },
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
    ] },
  { id:'fire', title:'Fire Lighting', icon:'fire', color:'#DC2626', summary:'Fuel, four fire lays, a safe fire site and putting a fire out.', keys:['fire','camp'],
    sections:[
      { id:'fuel', title:'Building the fire', blocks:[
        { t:'p', x:'Almost any fire gives comfort on a cold day — but for cooking, campers have a slogan: “Flames for boiling”.' },
        { t:'img', src:'notes/fire/fuel.png', cap:'Tinder (dry leaves or grasses), very thin twigs, thick twigs and large wood' } ] },
      { id:'tepee', title:'Tepee fire lay', blocks:[
        { t:'p', x:'Gives a quick fire for boiling pots and frying.' },
        { t:'steps', items:[
          { x:'Put a large handful of tinder on the ground in the middle of your fire site.' },
          { x:'Lean a circle of kindling sticks around it, tips meeting like the poles of a tepee. Do it carefully, or the sticks may fall over when the tinder burns out.' },
          { img:'notes/fire/lighting.png', x:'Crouch in front of the fire lay with your back to the wind. Strike a match, cup your hands around it and let it become a real flame, then touch it to the tinder close to the ground.' },
          { x:'When the tinder has lit the kindling, give the kindling a good start. Then feed the fire from the downwind side — thin fuel first, then thicker — until it is the size you want.' }] } ] },
      { id:'other-lays', title:'Other fire lays', blocks:[
        { t:'key', title:'Crisscross — a bed of coals quickly, for boiling and baking', items:['Lay two sticks on the ground, parallel.','Put tinder between them.','Lay thin kindling across the two sticks, a little finger’s width apart.','Add more crisscross layers, each a little thicker.'] },
        { t:'img', src:'notes/fire/crisscross.png', cap:'Crisscross fire lay' },
        { t:'key', title:'Fire-stick — on a rock or a hunter’s fireplace', items:['Lay a “fire stick” across the place.','Put a handful of tinder under it.','Lean kindling sticks against the fire stick, then thicker and thicker fuel.','Light the tinder.'] },
        { t:'img', src:'notes/fire/fire-stick.png', cap:'Fire-stick fire lay' },
        { t:'key', title:'Lean-to — an improved tepee', items:['Push a green “lean-to stick” into the ground at a slant, its tip pointing into the wind. It keeps the kindling upright after the tinder burns out.','Put a handful of tinder under it.','Lean kindling against it.','Strike a match and light the tinder.'] },
        { t:'img', src:'notes/fire/lean-to.png', cap:'Lean-to fire lay' } ] },
      { id:'permission', title:'Permission first', blocks:[
        { t:'warn', x:'Before lighting a fire anywhere, make sure you are allowed to. Usually only your local scout camp lets you light fires without special permission. Public woods and parks need a permit, and some do not allow open fires at all. Ask your Scout Leader how to get permission.' } ] },
      { id:'site', title:'A safe fire site', blocks:[
        { t:'img', src:'notes/fire/site.png', cap:'Clearing a fire site', side:true },
        { t:'p', x:'A fire must always be under complete control, so build it where it cannot spread.' },
        { t:'steps', items:[
          { x:'Choose a spot away from anything that can burn — nearby trees, grasses or mats of evergreen needles. Avoid mossy soil: once a peat fire starts it is extremely hard to put out.' },
          { x:'Clear the site down to bare soil, sand, gravel, clay or rock. If it is grassy, cut out shovel-sized turfs with your camp spade and keep them right side up in the shade — water them if needed so they do not dry out before you put them back.' },
          { x:'Clear the ground for 3 metres around the fire of anything a flying spark could catch: dry grass, leaves, twigs and pine needles.' },
          { x:'Put a pot of water close to the fire for emergencies.' },
          { x:'Now collect your firewood and start your fire.' }] } ] },
      { id:'out', title:'Putting the fire out', blocks:[
        { t:'key', title:'With water', items:['Sprinkle water using the backs of your fingers.','Spread out the sticks and coals.','Sprinkle again. Do not leave until the coals are cool enough to touch.'] },
        { t:'key', title:'Without water', items:['Spread out the sticks and coals.','Scrape burning embers off large logs and sticks.','Cover everything with sand.','Check and be sure the fire is dead out.'] } ] }
    ] }
];
