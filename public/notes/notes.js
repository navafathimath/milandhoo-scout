/* Scout Standard study notes (9th Raa Scout Group / Hulhudhuffaaru School), rewritten for easy reading.
   Every point from the original notes is kept; spelling is corrected. Each topic: sections of blocks.
   Block types: p (paragraph) · key {title, items} · warn · tip · img {src, cap, side} · steps [{img, x}] · gloss [[word, meaning]]
   · cards [{img, img2, name, sci, x}] (pictures with a name, e.g. trees, birds, fish, tracks). level: 'Scout Standard' (default) or 'First Class'.
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
    ] },

  /* ---------- First Class notes (8th Shaviyani Scout Group) ---------- */
  { id:'tracking', level:'First Class', title:'Tracking', icon:'binoculars', color:'#1F4E79', summary:'Reading the story of footprints in the sand: human, bird and animal tracks.', keys:['track'],
    sections:[
      { id:'what', title:'What tracking is', blocks:[
        { t:'tip', x:'Tracking is the skill of observing and understanding footprints and signs left by humans, birds and animals.' },
        { t:'p', x:'It helps scouts in adventure, survival and learning about nature.' } ] },
      { id:'why', title:'Why tracking is important for scouts', blocks:[
        { t:'key', title:'1. Learn observation skills', items:['Tracking sharpens your eyes to notice small details: footprints, broken twigs, disturbed sand, animal droppings or feather trails.','It trains scouts to be alert and mindful of their surroundings.'] },
        { t:'key', title:'2. Understand animal behaviour', items:['By looking at tracks, scouts can learn how animals move, feed or hide.','Example: turtle tracks lead to a nest, crab tracks show sideways movement, bird tracks near water show feeding spots.'] },
        { t:'key', title:'3. Improve survival and exploration', items:['In survival situations, tracking can help find food, fresh water or other people.','It helps scouts follow lost members or find safe routes.'] } ] },
      { id:'human', title:'Human tracks', blocks:[
        { t:'img', src:'notes/tracking/human.jpg', cap:'Human footprints in sand', side:true },
        { t:'gloss', items:[['Walking normally','Even spacing, clear heel and toe'],['Running','Longer strides, deeper front part'],['Limping','Uneven steps, one foot deeper'],['Carrying weight','Deeper footprints than normal'],['Walking backwards','Toes dig in first, heel lighter']] } ] },
      { id:'animals', title:'Bird and animal tracks', blocks:[
        { t:'cards', items:[
          { img:'notes/tracking/crow-foot.jpg', img2:'notes/tracking/crow-track.jpg', name:'Crow', x:'Three toes forward, one toe back.' },
          { img:'notes/tracking/duck-foot.jpg', img2:'notes/tracking/duck-track.jpg', name:'Duck', x:'Webbed footprint, wide, often in pairs near water.' },
          { img:'notes/tracking/cat-paw.jpg', img2:'notes/tracking/cat-track.jpg', name:'Cat', x:'Four toes, with the claw marks hidden.' },
          { img:'notes/tracking/rabbit.jpg', img2:'notes/tracking/rabbit-track.jpg', name:'Rabbit', x:'Front prints small, back prints larger, often in hopping pairs.' },
          { img:'notes/tracking/crab.jpg', img2:'notes/tracking/crab-track.jpg', name:'Crab', x:'Tiny sideways marks with little dot trails.' },
          { img:'notes/tracking/hermit-crab.jpg', name:'Hermit crab', x:'Small uneven trails with a shell drag line.' },
          { img:'notes/tracking/turtle.jpg', img2:'notes/tracking/turtle-hatchling.jpg', name:'Turtle', x:'Big flipper marks and a belly drag line towards or away from the sea.' } ] } ] },
      { id:'story', title:'Reading the story of tracks', blocks:[
        { t:'key', title:'Tracks tell us', items:['Direction of movement','Speed (walking, running)','Weight carried','Animal behaviour (feeding, escaping, resting)'] } ] },
      { id:'tips', title:'Tips for better tracking', blocks:[
        { t:'key', items:['Look at tracks early in the morning or late in the evening — shadows show them better.','Walk slowly and observe carefully.','Use a stick to measure stride length.','Notice the surroundings: broken twigs, droppings, feathers, shells.'] },
        { t:'tip', x:'Tracking = Observation + Patience + Adventure. “Every footprint tells a story — it’s up to a scout to read it!”' } ] } ] },

  { id:'firstaid-fc', level:'First Class', title:'First Aid: Bleeding, Fractures & Stretchers', icon:'cross', color:'#0F8A84', summary:'Main arteries, stopping bleeding, slings and splints for fractures, and carrying a stretcher.', keys:['first aid','fracture','splint','stretcher','ambulance'],
    sections:[
      { id:'what', title:'What first aid is', blocks:[
        { t:'p', x:'First aid means helping someone right away when they are hurt or sick, before a doctor or ambulance comes. It also keeps the person calm while waiting for help.' },
        { t:'tip', x:'It helps stop small problems from becoming big problems.' },
        { t:'key', title:'In these notes you will learn to', items:['Locate the main arteries in the body','Stop bleeding','Give first aid for fractures of the arm, leg and collarbone, making and using a sling or splint','Know why you should not move a person with a fracture','Carry an injured person safely on a stretcher (2-person and 4-person methods)'] } ] },
      { id:'arteries', title:'Main arteries in the body', blocks:[
        { t:'img', src:'notes/firstaid2/arteries.jpg', cap:'Main arteries and pulse points', side:true },
        { t:'p', x:'Arteries carry blood from the heart to the body. If an artery is cut, a lot of blood can come out very fast.' },
        { t:'key', title:'3 important arteries to know', items:['Carotid artery — on the neck. Place two fingers on either side of your windpipe; the pulse you feel is the carotid artery.','Brachial artery — inside of the upper arm. It runs along the inner side of the biceps.','Femoral artery — top of the leg, in the groin. This large artery is deep in the upper thigh, near where the leg joins the body.'] },
        { t:'warn', x:'If someone is bleeding from these areas, press on the artery to slow the bleeding.' } ] },
      { id:'bleeding', title:'Stop bleeding', blocks:[
        { t:'img', src:'notes/firstaid2/pressure.jpg', cap:'Press hard on the wound with a clean pad', side:true },
        { t:'steps', items:[{ x:'Stay calm and wear gloves if possible.' },{ x:'Use a clean cloth or bandage and press hard on the wound.' },{ x:'Raise the injured part above the level of the heart if possible.' },{ x:'Keep pressing until the bleeding stops or help arrives.' }] } ] },
      { id:'fractures', title:'Fractures', blocks:[
        { t:'p', x:'A fracture means a broken bone.' },
        { t:'key', title:'Signs', items:['Pain and swelling','Cannot move the part','The area looks strange or bent'] },
        { t:'steps', items:[{ img:'notes/firstaid2/xray-leg.jpg', x:'Leg' },{ img:'notes/firstaid2/xray-arm.jpg', x:'Arm' },{ img:'notes/firstaid2/xray-collarbone.jpg', x:'Collarbone' }] } ] },
      { id:'arm', title:'Fractured arm or forearm', blocks:[
        { t:'img', src:'notes/firstaid2/arm-sling.jpg', cap:'Arm supported in a sling', side:true },
        { t:'p', x:'If someone breaks their arm or forearm:' },
        { t:'steps', items:[{ x:'Do not move the arm.' },{ x:'Use a sling to hold the arm close to the body.' },{ x:'Put something soft (like a towel or scarf) under the arm.' },{ x:'Call for help or take them to a health centre.' }] } ] },
      { id:'leg', title:'Fractured leg', blocks:[
        { t:'img', src:'notes/firstaid2/leg-splint.jpg', cap:'Splints tied above and below the break', side:true },
        { t:'p', x:'A broken leg must be kept still. You can tie splints — strong, straight things such as wood or cardboard — around the leg.' },
        { t:'steps', items:[{ x:'Keep the leg still.' },{ x:'Tie splints (straight sticks or cardboard) around the leg.' },{ x:'Tie above and below the break.' },{ x:'Do not move the person unless it is necessary.' }] } ] },
      { id:'collarbone', title:'Fractured collarbone', blocks:[
        { t:'img', src:'notes/firstaid2/collarbone-sling.jpg', cap:'Sling with a broad bandage across the chest', side:true },
        { t:'key', title:'Signs', items:['The shoulder drops','Pain when lifting the arm'] },
        { t:'p', x:'Use a sling to support the arm and tie it across the chest.' },
        { t:'steps', items:[{ x:'Make a sling, as for the arm.' },{ x:'Use a broad bandage to tie the arm gently to the body.' }] },
        { t:'tip', x:'This keeps the arm from swinging and reduces movement.' } ] },
      { id:'dontmove', title:'Why not move a fracture?', blocks:[
        { t:'img', src:'notes/firstaid2/do-not-carry.jpg', cap:'Do not carry someone with a fracture like this', side:true },
        { t:'p', x:'If we move a broken bone, we can cause more pain or more damage and make the injury worse. It might tear muscles or blood vessels.' },
        { t:'p', x:'That is why we support the injury but do not move it.' },
        { t:'warn', x:'Let a doctor handle it!' } ] },
      { id:'stretcher', title:'Carrying a stretcher', blocks:[
        { t:'p', x:'Sometimes we need to carry an injured person safely.' },
        { t:'img', src:'notes/firstaid2/stretcher-2.jpg', cap:'Two-person carry', side:true },
        { t:'key', title:'Two-person carry', items:['One at the head, one at the feet.','Bend your knees to lift and keep your back straight.','Count “1, 2, 3 — lift!” and move together.','Keep the stretcher flat and level.'] },
        { t:'img', src:'notes/firstaid2/stretcher-4.jpg', cap:'Four-person carry' },
        { t:'key', title:'Four-person carry', items:['One helper at each corner — two at the head, two at the feet.','Count together and lift in step.','Walk slowly and talk to each other to stay balanced.'] } ] },
      { id:'tips', title:'Quick tips', blocks:[
        { t:'key', items:['Put the strongest people at the head end — it needs more support.','Always lift with your legs, not your back.','If one person feels tired, stop and change over before carrying on.'] } ] } ] },

  { id:'nature', level:'First Class', title:'Common Trees, Birds & Fish', icon:'leaf', color:'#2F7D32', summary:'Dhivehi names, scientific names and common English names of local trees, birds and fish.', keys:['tree','bird','fish','naturalist','nature','conservation'],
    sections:[
      { id:'trees', title:'Common trees', blocks:[
        { t:'tip', x:'Learn each tree’s Dhivehi name, its scientific name (in brackets) and its common English names.' },
        { t:'cards', items:[
          { img:'notes/nature/fenfoah.jpg', img2:'notes/nature/fenfoah-2.jpg', name:'Fen foah ruh', sci:'Areca catechu', x:'Areca palm, betel nut palm, pinang' },
          { img:'notes/nature/funa.jpg', img2:'notes/nature/funa-2.jpg', name:'Funa', sci:'Calophyllum inophyllum', x:'Alexandrian laurel, beauty leaf, dilo oil tree, Indian laurel, oil-nut tree' },
          { img:'notes/nature/laami.jpg', img2:'notes/nature/laami-2.jpg', name:'Laami', sci:'Ficus amplissima', x:'Bat tree' },
          { img:'notes/nature/burevi.jpg', img2:'notes/nature/burevi-2.jpg', name:'Burevi', sci:'Lumnitzera racemosa', x:'Black mangrove' },
          { img:'notes/nature/sabudheli.jpg', img2:'notes/nature/sabudheli-2.jpg', name:'Sabudheli', sci:'Manilkara zapota', x:'Chiku, naseberry, sapota, sapodilla' },
          { img:'notes/nature/muranga.jpg', img2:'notes/nature/muranga-2.jpg', name:'Muran’ga gas', sci:'Moringa oleifera', x:'Ben oil tree, drumstick tree, horseradish tree' },
          { img:'notes/nature/kuredhi.jpg', img2:'notes/nature/kuredhi-2.jpg', name:'Kuredhi', sci:'Pemphis acidula', x:'Pemphis, shrubby coral pemphis, coastal iron wood' },
          { img:'notes/nature/gulchampaa.jpg', img2:'notes/nature/gulchampaa-2.jpg', name:'Gulchampaa', sci:'Plumeria obtusa', x:'White champa, dwarf plumeria, white frangipani' },
          { img:'notes/nature/udhdhandi.jpg', img2:'notes/nature/udhdhandi-2.jpg', name:'Udhdhan’di', sci:'Saccharum officinarum', x:'Sugarcane' },
          { img:'notes/nature/magoo.jpg', img2:'notes/nature/magoo-2.jpg', name:'Magoo', sci:'Scaevola taccada', x:'Sea lettuce' },
          { img:'notes/nature/kuhlha.jpg', img2:'notes/nature/kuhlha-2.jpg', name:'Kuhlha', sci:'Sonneratia caseolaris', x:'Red apple mangrove, mangrove apple' },
          { img:'notes/nature/hirundhu.jpg', img2:'notes/nature/hirundhu-2.jpg', name:'Hirun’dhu', sci:'Thespesia populnea', x:'Indian tulip tree, portia tree, seaside mahoe' } ] } ] },
      { id:'birds', title:'Common birds', blocks:[
        { t:'cards', items:[
          { img:'notes/nature/maakanaa.jpg', name:'Maakanaa', sci:'Ardea cinerea', x:'Grey heron' },
          { img:'notes/nature/valla.jpg', name:'Valla', sci:'Sterna hirundo', x:'Common tern' },
          { img:'notes/nature/maaranga.jpg', name:'Maaran’ga', sci:'Anous stolidus', x:'Brown noddy' },
          { img:'notes/nature/kaalhu.jpg', name:'Kaalhu', sci:'Corvus splendens', x:'House crow, common crow' },
          { img:'notes/nature/koveli.jpg', img2:'notes/nature/koveli-2.jpg', name:'Dhivehi koveli', sci:'Eudynamys scolopacea', x:'Asian koel (male dark, female spotted)' },
          { img:'notes/nature/dhandifulhu.jpg', name:'Dhan’difulhu dhooni', sci:'Phaethon lepturus', x:'White-tailed tropicbird' },
          { img:'notes/nature/kirudhooni.jpg', name:'Kirudhooni', sci:'Sterna sumatrana', x:'Black-naped tern' },
          { img:'notes/nature/bodugaadhooni.jpg', name:'Bodugaadhooni', sci:'Sterna bergii', x:'Great crested tern' },
          { img:'notes/nature/vaali.jpg', name:'Vaali', sci:'Sterna anaethetus', x:'Bridled tern' },
          { img:'notes/nature/chonchon.jpg', name:'Chon chon ilolhi', sci:'Tringa nebularia', x:'Common greenshank' },
          { img:'notes/nature/rathafai.jpg', name:'Rathafai', sci:'Arenaria interpres', x:'Ruddy turnstone' },
          { img:'notes/nature/hoagulha.jpg', name:'Dhivehi hoagulhaa', sci:'Puffinus lherminieri', x:'Audubon’s shearwater' } ] } ] },
      { id:'fish', title:'Common fish', blocks:[
        { t:'cards', items:[
          { img:'notes/nature/fiyala.jpg', name:'Fiyala', sci:'Coryphaena hippurus', x:'Common dolphinfish' },
          { img:'notes/nature/mudahandhi.jpg', name:'Muda han’dhi', sci:'Caranx ignobilis', x:'Giant trevally' },
          { img:'notes/nature/maniyaa.jpg', name:'Maniyaa mas', sci:'Elagatis bipinnulata', x:'Rainbow runner' },
          { img:'notes/nature/mushimas.jpg', name:'Mushimas', sci:'Selar crumenophthalmus', x:'Bigeye scad' },
          { img:'notes/nature/giulhu.jpg', name:'Giulhu', sci:'Aprion virescens', x:'Green jobfish' },
          { img:'notes/nature/raiymas.jpg', name:'Raiymas', sci:'Lutjanus bohar', x:'Two-spot red snapper' },
          { img:'notes/nature/filolhu.jpg', name:'Filolhu', sci:'Lutjanus monostigma', x:'One-spot snapper' },
          { img:'notes/nature/kandu.jpg', name:'Kan’du guruva', sci:'Plectorhinchus vittatus', x:'Oriental sweetlips' },
          { img:'notes/nature/latti.jpg', name:'Latti', sci:'Euthynnus affinis', x:'Kawakawa' },
          { img:'notes/nature/kurumas.jpg', name:'Kurumas', sci:'Acanthocybium solandri', x:'Wahoo' },
          { img:'notes/nature/kattafulhi.jpg', name:'Kattafulhi', sci:'Kuhlia mugil', x:'Barred flagtail' },
          { img:'notes/nature/kirulhiya.jpg', name:'Kirulhiya mas', sci:'Kyphosus cinerascens', x:'Snubnose rudderfish, blue sea chub' } ] } ] },
      { id:'recall', title:'Let’s recall what we learned', blocks:[
        { t:'key', title:'Test yourself', items:['Cover the names and identify each tree, bird and fish from its picture.','Give the Dhivehi name when you hear the English name, and the other way round.','Say where on your island you have seen each one.'] } ] } ] },

  { id:'emergencies', level:'First Class', title:'Emergencies: How Scouts Respond', icon:'alert', color:'#C2410C', summary:'Fire, drowning, fainting, gas, electric shock, artificial respiration and how to summon help.', keys:['emergenc','rescue','life saver','first aid'],
    sections:[
      { id:'what', title:'What an emergency is', blocks:[
        { t:'p', x:'An emergency is a sudden, unexpected situation that needs quick action to prevent harm.' },
        { t:'p', x:'Scouts are always ready, alert and trained to save lives.' },
        { t:'tip', x:'“A Scout is never taken by surprise; he knows exactly what to do.” — Baden-Powell' } ] },
      { id:'rules', title:'General rules in any emergency', blocks:[
        { t:'key', items:['Stay calm and alert.','Make sure you are safe first.','Assess the situation.','Call for help immediately.','Give first aid if you are trained.','Never panic or run about aimlessly.'] } ] },
      { id:'fire', title:'Fire in a house or school', blocks:[
        { t:'steps', items:[{ x:'Raise the alarm: shout “Fire! Fire!”' },{ x:'Alert teachers, adults and the fire service.' },{ x:'Get out immediately. Do not use lifts.' },{ x:'If smoke is thick, crawl low under the smoke.' },{ x:'Call the fire service on 118.' }] },
        { t:'warn', x:'If someone’s clothes catch fire: STOP, DROP and ROLL.' } ] },
      { id:'drowning', title:'Drowning', blocks:[
        { t:'warn', x:'Do NOT jump in if you cannot swim.' },
        { t:'steps', items:[{ x:'Reach with a stick or rope, or throw a float.' },{ x:'Pull the person to safety.' },{ x:'Check for breathing and pulse.' },{ x:'Begin rescue breathing (mouth-to-mouth) if needed.' },{ x:'Summon help: ambulance, adults or the coastguard.' }] } ] },
      { id:'fainting', title:'Fainting', blocks:[
        { t:'img', src:'notes/emergency/fainting.jpg', cap:'Lay the person flat and raise the legs', side:true },
        { t:'key', title:'Signs', items:['Sudden collapse','Pale face','Sweating'] },
        { t:'steps', items:[{ x:'Lay the person flat on their back.' },{ x:'Raise the legs slightly.' },{ x:'Loosen tight clothing.' },{ x:'Keep fresh air flowing. Do not pour water on the face.' },{ x:'If they do not recover, get medical help.' }] } ] },
      { id:'gas', title:'Gas suffocation', blocks:[
        { t:'key', title:'Causes', items:['Leaking gas','A closed room','Smoke'] },
        { t:'warn', x:'Do not go in without fresh air or a mask.' },
        { t:'steps', items:[{ x:'Open doors and windows.' },{ x:'Move the person into fresh air.' },{ x:'Start artificial respiration if they are not breathing.' },{ x:'Call the emergency services.' }] } ] },
      { id:'shock', title:'Electric shock', blocks:[
        { t:'warn', x:'Do not touch the person while the current is flowing.' },
        { t:'steps', items:[{ x:'Turn off the main switch or pull out the plug.' },{ x:'If you cannot, move the wire away with a dry wooden stick or dry cloth.' },{ x:'Check breathing and pulse.' },{ x:'If they are not breathing, start artificial respiration.' },{ x:'Call an ambulance or an adult immediately.' }] } ] },
      { id:'schafer', title:'Artificial respiration — Schafer method', blocks:[
        { t:'p', x:'Used when the person is not breathing, especially after drowning.' },
        { t:'img', src:'notes/emergency/schafer.jpg', cap:'Schafer method' },
        { t:'steps', items:[{ x:'Lay the person face down, arms bent, head turned to one side.' },{ x:'Kneel beside their hips.' },{ x:'Press your hands on the lower ribs to push air out.' },{ x:'Release to let air back in.' },{ x:'Repeat in a steady rhythm, about 12–15 times a minute.' }] } ] },
      { id:'holger', title:'Artificial respiration — Holger-Nielsen method', blocks:[
        { t:'img', src:'notes/emergency/holger-nielsen.jpg', cap:'Holger-Nielsen method', side:true },
        { t:'steps', items:[{ x:'The person lies face down; the rescuer kneels at their head.' },{ x:'Take turns pressing on the back and lifting the arms.' },{ x:'Press on the back: air goes out. Lift the arms: air comes in.' },{ x:'Carry on until normal breathing returns.' }] } ] },
      { id:'mouth', title:'Mouth-to-mouth resuscitation', blocks:[
        { t:'img', src:'notes/emergency/mouth-to-mouth.jpg', cap:'Tilt the head back, pinch the nose, breathe in', side:true },
        { t:'steps', items:[{ x:'Lay the person on their back.' },{ x:'Tilt the head back and lift the chin.' },{ x:'Pinch the nose shut.' },{ x:'Seal your mouth over theirs.' },{ x:'Blow for 1 second and watch the chest rise.' },{ x:'Give 2 breaths, then 30 chest compressions (if trained in CPR).' }] },
        { t:'key', title:'Precautions', items:['Check the mouth for anything blocking it.','Use a barrier (cloth or plastic) if possible.','Do not blow too hard.'] },
        { t:'tip', x:'Today, first aid courses teach CPR: mouth-to-mouth breaths together with chest compressions. The Schafer and Holger-Nielsen methods are older methods you learn for the syllabus.' } ] },
      { id:'help', title:'How to summon help', blocks:[
        { t:'key', title:'Always give', items:['Your name','Where the incident is','What kind of emergency it is','How many people are hurt','Any danger still present'] },
        { t:'gloss', items:[['Police','119'],['Fire & Rescue','118'],['Ambulance','102'],['Coastguard','191']] } ] },
      { id:'recap', title:'Quick recap', blocks:[
        { t:'gloss', items:[['Fire','Get everyone out and call for help'],['Drowning','Rescue safely — reach, throw, don’t jump'],['Fainting','Raise the legs, fresh air'],['Gas','Fresh air first'],['Electric shock','Switch off the current first'],['No breathing','Artificial respiration: Schafer, Holger-Nielsen or mouth-to-mouth']] },
        { t:'key', title:'Emergency drill challenge', items:['Split into small groups.','Each group gets one emergency (fire, fainting and so on).','Act out the correct response — 2 minutes each.'] },
        { t:'tip', x:'Stay calm and confident. Practice makes you ready. “Be Prepared — that’s the Scout way!”' } ] } ] },

  { id:'environment', level:'First Class', title:'Environmental Education', icon:'wave', color:'#0E7490', summary:'Why nature matters: chemicals, coral reefs, sea pollution, climate change and what Scouts can do.', keys:['environment','conservation','world conservation'],
    sections:[
      { id:'why', title:'Why protecting the environment matters', blocks:[
        { t:'key', items:['Protecting the environment keeps ecosystems in balance — and all life on Earth, including people, depends on them.','Pollution affects the air we breathe, the water we drink and the soil we grow food in. Reducing pollution and saving resources protects our health.','What we do today decides whether future generations have clean resources and a stable climate.'] } ] },
      { id:'chemicals', title:'Hazardous chemicals and their impact', blocks:[
        { t:'p', x:'Chemicals pollute land, water and air, harming plants, animals and people.' },
        { t:'gloss', items:[['Plastic waste','Hurts marine life and pollutes the oceans'],['Oil spills','Poison fish and damage coastlines'],['Pesticides','Harm insects and birds, and contaminate water']] },
        { t:'tip', x:'Scouts’ role: reduce waste, avoid harmful products and spread the word about safe disposal.' } ] },
      { id:'reef', title:'Protecting the reef', blocks:[
        { t:'p', x:'Coral reefs are among the richest ecosystems on Earth, home to thousands of sea creatures. They are natural barriers that protect our islands from storms and erosion.' },
        { t:'key', title:'Main threats', items:['Pollution — plastic and chemicals','Warming seas','Overfishing'] },
        { t:'tip', x:'Scouts’ role: reduce plastic waste, respect marine life and raise awareness.' } ] },
      { id:'sea', title:'Sea pollution and its effects', blocks:[
        { t:'gloss', items:[['Harms marine life','Plastic, chemicals and oil damage sea animals and coral reefs'],['Breaks food chains','Pollutants harm small creatures, which affects all sea life — and people'],['Risks our health','Polluted seafood can make people ill'],['Main sources','Plastic waste, industrial chemicals and oil spills']] },
        { t:'tip', x:'Scouts’ action: join beach clean-ups, use less plastic and raise awareness.' } ] },
      { id:'climate', title:'Greenhouse effect, climate change and sea level', blocks:[
        { t:'key', title:'The greenhouse effect', items:['Greenhouse gases trap heat and warm the Earth.','Key gases: carbon dioxide (CO₂), methane and water vapour.','This leads to global warming and climate change.'] },
        { t:'key', title:'Sea level rise', items:['Melting ice caps and warming water (which expands) make the sea level rise.','Impacts: flooding, loss of habitats and coastal erosion — a real danger for low islands like ours.'] },
        { t:'tip', x:'Scouts’ action: reduce your carbon footprint and spread awareness.' } ] },
      { id:'scouting', title:'How Scouting can help', blocks:[
        { t:'key', items:['Plant trees, reduce waste and recycle.','Take part in clean-ups and conservation projects.','Spread awareness in your community.'] } ] },
      { id:'bp', title:'Baden-Powell and nature', blocks:[
        { t:'key', items:['B-P stressed the “open air” and a close connection with nature.','He believed studying nature builds character and responsibility.','He encouraged Scouts to care for the environment.'] },
        { t:'tip', x:'B-P’s last message to Scouts: “Try and leave this world a little better than you found it.” Every Scout can make a difference!' } ] } ] },

  { id:'estimation', level:'First Class', title:'Estimation', icon:'mountain', color:'#6B5B7A', summary:'Judging height and length without measuring tools, then checking with real measurements.', keys:['estimat','measure'],
    sections:[
      { id:'what', title:'What estimation is', blocks:[
        { t:'p', x:'Estimation is making a careful guess or judgement about a measurement — such as height, length or distance — without using exact measuring tools.' },
        { t:'p', x:'It helps us make quick, sensible decisions when exact measuring is not possible: judging the height of a tree, the distance to a building, or how much material a job needs.' } ] },
      { id:'task', title:'Your estimation task', blocks:[
        { t:'p', x:'Answer these in your log book. The examples show the kind of answer expected.' },
        { t:'gloss', items:[['Place to estimate height','e.g. the flagpole near the school ground'],['Estimated height','e.g. 7 metres'],['Actual height','e.g. 6.8 metres'],['Place to estimate length','e.g. length of the school hall'],['Estimated length','e.g. 20 metres'],['Actual length','e.g. 19.6 metres']] } ] },
      { id:'how', title:'Equipment and method', blocks:[
        { t:'key', title:'Length — measuring tape', items:['Lay the tape along the ground to find the actual length.'] },
        { t:'key', title:'Height — stick-and-shadow method (or a ranging rod)', items:['Stand a stick of known height upright and measure its shadow.','Measure the shadow of the object at the same time.','Height of object = height of stick × (object’s shadow ÷ stick’s shadow).'] },
        { t:'tip', x:'Example: a 1 m stick casts a 0.5 m shadow, and the flagpole casts a 3.4 m shadow. Height = 1 × 3.4 ÷ 0.5 = 6.8 m.' } ] } ] },

  { id:'logbook-fc', level:'First Class', title:'Log Book Tasks', icon:'book', color:'#B5483F', summary:'What to write in your First Class log book for cooking and the hike / expedition.', keys:['log book','logbook','expedition','hike','cook'],
    sections:[
      { id:'cooking', title:'Cooking', blocks:[
        { t:'img', src:'notes/logbook/cooking.jpg', cap:'Cooking log book card (with Dhivehi instructions)', side:true },
        { t:'key', title:'Weekend camp menu', items:['Write a menu for a weekend camp, with the costing and quantities of everything you need.'] },
        { t:'key', title:'Filleting a fish', items:['Video yourself filleting a fish, then answer:','How did you get the fish?','What kind of fish was it?','Who helped you complete this task?','How was the experience?'] },
        { t:'tip', x:'Take screenshots from your video, print them and paste them in your log book.' } ] },
      { id:'hike', title:'Hike — expedition', blocks:[
        { t:'img', src:'notes/logbook/hike.jpg', cap:'Hike – expedition log book card', side:true },
        { t:'steps', items:[
          { x:'Say that you went on a camp called “Oilvaali Camp” in Sh. Milandhoo for 4 days and 3 nights (give the dates). Its main purpose was to complete the expedition you need for First Class.' },
          { x:'Write which materials you used to make the raft and how you made it. Include how many people the raft could carry.' },
          { x:'Describe where you travelled on the raft and roughly how far.' },
          { x:'Note the important landmarks, plants and animals, with timings, weather, tides and environmental conditions.' },
          { x:'Paste some pictures from the rafting event (get them from the scout Facebook page).' }] } ] } ] },

  { id:'knots-fc', level:'First Class', title:'Knots, Lashings & Splicing', icon:'knot', color:'#1D4ED8', summary:'Shear lashing, fireman’s chair, butterfly knot, rolling hitch, parbuckling and three splices.', keys:['knot','lash','splic','pioneer','rope'],
    sections:[
      { id:'shear', title:'Shear lashing', blocks:[
        { t:'p', x:'Binds two parallel poles together, to make them longer or to build a strong A-frame (shear legs) for lifting heavy loads.' },
        { t:'img', src:'notes/knots2/shear.jpg', cap:'Shear lashing' },
        { t:'steps', items:[{ x:'Start with a clove hitch around just one of the poles before you begin wrapping.' },{ x:'Make six wraps around both poles.' },{ x:'Make two frapping turns between the poles.' },{ x:'Finish the loose end with a clove hitch, then open the legs to tighten the lashing.' }] } ] },
      { id:'firemans', title:'Fireman’s chair knot', blocks:[
        { t:'p', x:'Makes a secure, adjustable double loop that will not slip under pressure. It is traditionally used in emergency rescues to lower or lift a person safely.' },
        { t:'img', src:'notes/knots2/firemans-chair.jpg', cap:'Fireman’s chair knot, steps 1 to 4' } ] },
      { id:'butterfly', title:'Butterfly knot', blocks:[
        { t:'img', src:'notes/knots2/butterfly.jpg', cap:'Butterfly knot', side:true },
        { t:'p', x:'Forms a very secure, fixed loop in the middle of a rope. It can take a load from any direction without slipping — a favourite in mountaineering and rigging.' },
        { t:'steps', items:[{ x:'Make a loop like an “8” and fold the upper loop down.' },{ x:'Pull it around and pass it through the lower loop.' },{ x:'Pull all the way up to tighten the knot.' }] } ] },
      { id:'rolling', title:'Rolling hitch', blocks:[
        { t:'p', x:'A friction hitch for tying a rope to a pole or to another rope. It grips tightly under tension and holds a load pulling along the pole or rope.' },
        { t:'img', src:'notes/knots2/rolling-hitch.jpg', cap:'Rolling hitch: rope to rope (top) and rope to pole (bottom)' } ] },
      { id:'parbuckle', title:'Parbuckling', blocks:[
        { t:'p', x:'A rigging method that uses a loop of rope to roll heavy round objects, such as logs or barrels, safely up or down a slope with less effort.' },
        { t:'steps', items:[{ img:'notes/knots2/parbuckle.jpg', x:'Rolling a log up planks onto a cart' },{ img:'notes/knots2/parbuckle-2.jpg', x:'How the rope is laid around the log' }] } ] },
      { id:'splices', title:'Splicing', blocks:[
        { t:'cards', items:[
          { img:'notes/knots2/back-splice.jpg', name:'Back splice', x:'Weave the loose strands at the end of a laid rope back into itself. It makes a neat stopper end that stops fraying.' },
          { img:'notes/knots2/eye-splice.jpg', name:'Eye splice', x:'Weave the strands back into the rope to make a permanent, very strong loop at the end.' },
          { img:'notes/knots2/long-splice.jpg', name:'Long splice', x:'Permanently joins two ropes of the same thickness. It hardly makes the rope thicker, so it can still run through pulleys and blocks.' } ] } ] } ] },

  { id:'compass-fc', level:'First Class', title:'Mapping & Compass', icon:'compass', color:'#0369A1', summary:'The 32 points of the compass, true and magnetic north, charts, finding direction, and safety equipment at sea.', keys:['compass','map','navigat','orienteer','boat','sail'],
    sections:[
      { id:'points', title:'The 32 points of the compass', blocks:[
        { t:'img', src:'notes/compass/32-points.jpg', cap:'The 32-point compass rose', side:true },
        { t:'p', x:'The compass is divided into 360 degrees and into 32 points. The 32-point system lets sailors, hikers and adventurers give precise bearings and navigate well.' },
        { t:'key', title:'Cardinal points (4)', items:['North (N), East (E), South (S), West (W)'] },
        { t:'key', title:'Ordinal points (4)', items:['Northeast (NE), Southeast (SE), Southwest (SW), Northwest (NW)'] },
        { t:'key', title:'Secondary intercardinal points (8)', items:['North-northeast (NNE), East-northeast (ENE)','East-southeast (ESE), South-southeast (SSE)','South-southwest (SSW), West-southwest (WSW)','West-northwest (WNW), North-northwest (NNW)'] },
        { t:'key', title:'Quarter points (16)', items:['North by East (NbE), Northeast by North (NEbN), Northeast by East (NEbE), East by North (EbN)','East by South (EbS), Southeast by East (SEbE), Southeast by South (SEbS), South by East (SbE)','South by West (SbW), Southwest by South (SWbS), Southwest by West (SWbW), West by South (WbS)','West by North (WbN), Northwest by West (NWbW), Northwest by North (NWbN), North by West (NbW)'] },
        { t:'key', title:'Uses', items:['Finding directions for navigation','Plotting courses on maps and charts','Finding your way during outdoor activities'] } ] },
      { id:'north', title:'True north and magnetic north', blocks:[
        { t:'img', src:'notes/compass/true-magnetic.jpg', cap:'True north and magnetic north', side:true },
        { t:'gloss', items:[['True north','The direction of the geographic North Pole'],['Magnetic north','The direction a compass needle points, lined up with the Earth’s magnetic field'],['Variation (declination)','The angle between true north and magnetic north. It changes from place to place.']] },
        { t:'p', x:'The difference exists because the magnetic poles are not in the same place as the geographic poles. Navigators and map-makers must allow for it to get accurate bearings — especially in remote or unfamiliar places.' } ] },
      { id:'chart', title:'Using a navigation chart', blocks:[
        { t:'key', title:'A chart includes', items:['A grid of latitude and longitude to locate positions','A compass rose to show directions','Symbols for depths, hazards, buoys and other details'] },
        { t:'steps', items:[{ x:'Find your starting point and your destination.' },{ x:'Use a compass to work out the bearing.' },{ x:'Work out the distance using the chart’s scale.' }] } ] },
      { id:'daynight', title:'Finding direction by day and night', blocks:[
        { t:'key', title:'By day — the sun', items:['The sun rises in the east and sets in the west.'] },
        { t:'key', title:'By night — the stars', items:['Northern hemisphere: Polaris, the North Star (ގަހާތަރި), in the Little Bear (Ursa Minor), shows north.','Southern hemisphere: the Southern Cross (ދެކުނު ހާލި) shows south.'] } ] },
      { id:'safety', title:'Safety equipment on sea-going vessels', blocks:[
        { t:'p', x:'Every sea-going vessel, including fishing boats, should carry:' },
        { t:'cards', items:[
          { img:'notes/compass/lifejacket.jpg', name:'Life jackets', x:'A flotation device for everyone on board.' },
          { img:'notes/compass/lifebuoy.jpg', name:'Lifebuoys', x:'For emergencies in the water.' },
          { img:'notes/compass/extinguisher.jpg', name:'Fire extinguishers', x:'To put out fires on board.' },
          { img:'notes/compass/flares.jpg', name:'Distress signals', x:'Flares or an EPIRB (Emergency Position Indicating Radio Beacon).' },
          { img:'notes/compass/radio.jpg', name:'Radio equipment', x:'For communication.' },
          { img:'notes/compass/firstaid-kit.jpg', name:'First-aid kit', x:'For medical emergencies.' },
          { img:'notes/compass/bilge-pump.jpg', name:'Bilge pump', x:'To pump water out of the boat.' },
          { img:'notes/compass/compass.jpg', name:'Compass', x:'Accurate navigation that works without GPS or electronics — vital in poor visibility or if equipment fails.' } ] } ] } ] },

  { id:'swimming-fc', level:'First Class', title:'Swimming', icon:'wave', color:'#0891B2', summary:'Freestyle 150 m, backstroke 100 m and breaststroke 50 m: body, legs, arms and breathing.', keys:['swim'],
    sections:[
      { id:'freestyle', title:'Freestyle — 150 metres', blocks:[
        { t:'img', src:'notes/swimming/freestyle.jpg', cap:'Freestyle', side:true },
        { t:'p', x:'Swim on your front, moving the arms one after the other and kicking the legs.' },
        { t:'gloss', items:[['Body','Straight, face down, close to the surface'],['Legs','Kick up and down one after the other; legs relaxed, toes pointed'],['Arms','Reach one arm forward and pull it through the water, then the other'],['Breathing','Breathe out into the water; turn your head to the side to breathe in as one arm comes forward']] } ] },
      { id:'backstroke', title:'Backstroke — 100 metres', blocks:[
        { t:'img', src:'notes/swimming/backstroke.jpg', cap:'Backstroke', side:true },
        { t:'p', x:'Swim on your back, moving the arms one after the other and kicking the legs.' },
        { t:'gloss', items:[['Body','Lie on your back, straight, face up, hips near the surface'],['Legs','Kick up and down one after the other; straight but relaxed, toes pointed'],['Arms','Swing one arm back over your head into the water and pull it under towards your hip while the other arm moves'],['Breathing','Face stays above the water — breathe normally, do not hold your breath']] } ] },
      { id:'breaststroke', title:'Breaststroke — 50 metres', blocks:[
        { t:'img', src:'notes/swimming/breaststroke.jpg', cap:'Breaststroke', side:true },
        { t:'p', x:'Move both arms together and kick the legs like a frog.' },
        { t:'gloss', items:[['Body','Straight, face down, both arms stretched forward'],['Arms','Sweep both arms outward, pull the water towards your chest, then stretch forward again'],['Legs','Bend your knees, bring your heels towards your body, turn your feet out and kick backwards like a frog'],['Breathing','Lift your head to breathe in as your arms pull to your chest; put your face back in and breathe out']] } ] } ] }
];
