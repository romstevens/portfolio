var express = require('express');
var path = require('path');
var app = express();

var poetry = [
    {title: 'Black Magic', date: 'September 2012', body: 'The air is thick with spices.<br>My nose stings, water salts<br>my cheeks. Heat scalds my<br>hands and the burlap dolls<br>stare darkly at me from the<br>shelf. I stick a pin in each<br>of their eyes and call it<br>Thursday evening. Tomorrow<br>we are going out for drinks.'},
    {title: 'Pigeons', date: 'September 2012', body: 'Black water under the river bridge<br>in Minneapolis, city of the drowned.<br>Winter curls its nails under my skin;<br>I wish I could dump the bodies from<br>this iron graveyard into that dark river.'},
    {title: 'Back in the Day', date: 'March 2013', body: 'i used to make voodoo heads of my ex-lovers.<br>i took photographs of them, polaroids usually<br>and summoned the flesh out of the pictures.<br>i shrank their mental image, the fleshy tumor<br>on the picture that vaguely resembled a person,<br>and dried it up. i strung them all into a necklace<br>with hay-twine and sweetgrass and placed<br>pearls into their empty eye-sockets. there,<br>hanging on the shelf, they did not bother me.<br>their heads were powerless<br>just as i.'}
    ];

var prose = [
    {title: 'Imarith', date: 'September 2012', body: 'his eyes shine from over the black whorls of his cheeks and the thin orchid-petals over his eyebrows. his poet’s leaves are painted purple; they glow softly with the pollen from his nightmares. i have never seen him so close to death, so close to his dreams.<br><br>he never shares his dreams with me. when i ask he just smiles, his lips pressed thin and the grove humming between his fingertips and mine. a firefly circles the lantern we are using to silence the darkness. he holds my icy hands without a word. on the darkest nights, when rain falls in slick sheets over the tree canopy and collects in the pool at the bottom of the grove, he asks me to sleep with him. it is as innocent a request as it could possibly be--which is to say, not at all. i think sometimes the nightmares are his way of flirting, his own unique foreplay, but he assures me they are all pain. that the suffering he tastes in the back of his throat isn’t just my honey or my sap.<br><br>his head rests against the crook of my neck, his lips slightly open in his sleep. he has never been more beautiful than when he is dreaming, when his shoulders rise and fall. his hands press into my back, the soft petals of his fingertips against hard, icy wood. he is like a panther, sleek and limber, a soft coat of fur dusted with starlight from the luminescent grove. he lays against the snowy deeps of my chest.<br><br>i want to cry every time he wakes up screaming.'},
    {title: 'Painted Water', date: 'February 2013', body: 'It’s spring, and the cherry blossoms scream hibiscus tea pink outside my window, vibrant as the crushed eyeshadow raccooning Hinata’s eyes. Her black liner runs down her face in thin, wet streaks that we draw out one droplet of water at a time. The end result is beautiful, I say, and so she asks me to paint her.<br><br>We don’t bother moving out of our room. The ground outside is wet from a fresh rain, and the breeze carries the muddy taste of damp tree bark through my window, where it splatters the fresh paper in front of me. I imagine the tree take root in my bare skeleton of a girl’s face, curving its roots around her cheeks and snaking, unbidden, into her eye sockets. It drips black ink down the canvas, taking inspiration not from Hinata’s tears, but from the rain, which seeps outwards from its imaginary roots.<br><br>“The tree ruined it,” I tell Hinata.<br><br>“Huh?”<br><br>“The tree,” I say, and spin it around to show her the damp bark.<br><br>“I don’t see anything.”<br><br>I check. The water has seeped out of the tree and onto the page, but it never seems to dry up. The tree is damp and rotting, and its bark fuzzes with bluish mold, and hanging vines wrap the canvas as though they are trying to strangle it. “There’s a tree on the page. It came from out there.”<br><br>“Okay,” Hinata says. “So get a new sheet.”<br><br>“Give me a minute.” I stare at the tree until it vanishes, but the wetness on the paper remains. I throw it in the trash and get a new one.<br><br>Hinata sits patiently while I fill in her pale face with the pen. The dark rose-colored ink blossoms in the wetness, which has somehow infected this sheet as well, but I can still work with it--so long as I don’t take too much time.<br><br>Her eyes are larger in the ink than they are in life, and her face feels small in comparison. I witness Hinata’s eyes, rimmed with pink and black, seep over the paper, tangling themselves in her hair and peering up at me.<br><br>“You okay?”<br><br>I look up from the paper. Hinata’s face stares at me, like an alien. “I’m fine.”<br><br>“Can I see the picture?”<br><br>I look down and realize I’ve been painting my sister’s face--or at least, what I remember Aya looking like. I haven’t seen her in a long time; I’ve been so busy with school. I miss her. She has dark hair that is delicate lace on her good days, and most other days thick and heavy, like oiled strands of kelp, and her eyes are larger than anyone’s I’ve ever met. She looks like an American woman, the ones whose faces show up on magazines, gossamer pale, with makeup like moth wings over their eyes.<br><br>“Rin? Can I see?”<br><br>“Yeah, sorry. I was just thinking.”<br><br><br><br>Hinata gets up and stands next to me, inspecting my art. “It’s good,” she says. “But it doesn’t really look like me.”<br><br>“It’s the dampness,” I say. “The paper’s wet. I can’t work with wet paper.”<br><br>She brushes her fingers against the page. They come off crushed pink, but dry. “Seems fine to me.”<br><br>“And my style. That’s my style, is all. Big eyes. You know.”<br><br>“Oh.”<br><br>Hinata goes back to where she was and lets me keep pretending that I am painting her and not my sister--and somewhere, their faces seem to meet, and this girl that I met at the beginning of this year wears Aya’s face like a mask. I want to tear it off of her and keep it for my own.<br><br>The painting will have to do.<br><br>“I’m going up to see my family during break,” Hinata says suddenly. I watch my sister’s face use my roommate’s voice to talk to me. The pink painting stares up at me, its eyes dead. I can see the tree coming back through her open mouth, its roots slipping out from between her lips.<br><br>“That’s cool,” I say.<br><br>“What about you?”<br><br>“I . . . uh, I’m going to hang out with my sister.” I don’t think when I open my mouth, and the lie becomes a cobwebbed truth. I watch a spider slip out of the painting’s mouth, skating down her neck.<br><br>“Oh. Is she pretty?”<br><br>“Her eyes are big and she wears lots of makeup.”<br><br>“Yeah, but is she pretty?”<br><br>“I don’t know,” I say. Aya’s face is rotting, and the spider leaves a trail of silk down her shoulders. “I guess so.”<br><br>“Oh.” Hinata checks her watch. “I’ve got class right now. Can we finish this later?”<br><br>“It’s already done,” I say. “I was just touching up, is all.”<br><br>“Oh. Should’ve told me earlier.” Hinata moves around to look at the painting. I shift it away so she can’t see--I don’t want her to see my sister’s face falling apart just because of the damp tree. “Hey, what’re you doing?”<br><br>“I’m not really very proud of it.”<br><br>“So?” Hinata rubs her face with a cloth to get the makeup out. “Let me see.”<br><br>“No.”<br><br>“C’mon. It’s my face.” Hinata pushes past me and I have to stop her.<br><br>“It’s not your face!”<br><br> She grabs the painting from me, but I hold onto it. The pen slips from my hand. “What’s your problem, Rin? Let me see!”<br><br>I wrench it back from her. The paper tears in our hands, and the tree slides away, leaving only a face that looks like a badly drawn Hinata. There is no trace of my rotting sister, no spider, no cobwebs or seeping black ink or moth wing eyelids, only Hinata’s pink face with oversized eyes, ripped down the middle.<br><br>“Oh . . . sorry.” Hinata lets go of her side of the painting. “I didn’t mean to. I’m sorry.”<br><br>“It’s okay,” I say, and look down at my bed, where the pen fell. “Just go to class.”<br><br> Ink blooms from the pen onto my white sheets, staining them hot pink. Hinata shuts our door behind her, and I watch the pink spread. Outside my window, the cherry blossoms scream, and the damp rot claims them, too.'}
    ];

app.set('port', (process.env.PORT || 5000));

app.get('/poetry', function(req, res){
    res.send(poetry);
});

app.get('/prose', function(req, res){
    res.send(prose);
});

app.get('/*', function(req, res){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, 'public', file));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});