/* javascript */


"use strict";
let data=[{
  "parkname": "Carolina Beach State Park",
  "lat": "34.04572234",
  "long": "-77.91382456",
  "parkphone": "910-458-8206",
  "nameicecream": "Squigley's Ice Cream & Treats",
  "addressicecream": "208 S Lake Park Blvd, Carolina Beach, NC 28428",
  "distanceicecream": "1.4",
  "activites": "at long Valley Farm Hiking (3 miles); Biking (3 miles); Picnicking at Sandhills Hiking (10.5 miles); Biking (10.5 miles); Horseback riding (10.5 miles)",
  "suggesthike": "Sugarloaf Trail",
  "lengthsuggesthike": "3",
  "difsughike": "easy/intermediate",
  "placeholder": "0"
}, {
  "parkname": "Carvers Creek State Park",
  "lat": "35.20302862",
  "long": "-78.97587116",
  "parkphone": "910-436-4681",
  "nameicecream": "Cool Kidz Frozen Treats",
  "addressicecream": "1139 N Bragg Blvd, Spring Lake, NC 28390",
  "distanceicecream": "2",
  "activites": "Hiking (10.5 miles);  Biking (10.5 miles); Horseback riding (10.5 miles)",
  "suggesthike": "Cypress Point Loop Trail",
  "lengthsuggesthike": "0.9",
  "difsughike": "easy/intermediate",
  "placeholder": "0"
}, {
  "parkname": "Chimney Rock State Park",
  "lat": "35.43124619",
  "long": "-82.24288187",
  "parkphone": "828-625-1823",
  "nameicecream": "Village Scoop",
  "addressicecream": "439 Main St, Chimney Rock, NC 28720",
  "distanceicecream": "1.3",
  "activites": "at Chimney Rock Hiking (3.5 miles); Fishing; Picnicking at Rumbling Bald Hiking (1.5 miles); Rock climbing at Eagle Rock Hiking (8.5 miles); Biking (8.5 miles); Rock climbing",
  "suggesthike": "Skyline Trail",
  "lengthsuggesthike": "1.1",
  "difsughike": "moderate",
  "placeholder": "0"
}, {
  "parkname": "Cliffs of the Neuse State Park",
  "lat": "35.23508184",
  "long": "-77.89034071",
  "parkphone": "919-778-6234",
  "nameicecream": "Cold Stone Creamery",
  "addressicecream": "1209 N Berkeley Blvd Ste C, Goldsboro, NC 27534",
  "distanceicecream": "12",
  "activites": "Hiking (4 miles); Biking (3.5 miles); Paddling; Swimming (seasonal); Fishing; Picnicking",
  "suggesthike": "Cliffs of the Neuse Lake Trail",
  "lengthsuggesthike": "1.4",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Crowders Mountain State Park",
  "lat": "35.20864824",
  "long": "-81.29644144",
  "parkphone": "704-853-5375",
  "nameicecream": "Elo Sweets & Goodies",
  "addressicecream": "136 W Virginia Ave, Bessemer City, NC 28016",
  "distanceicecream": "6.5",
  "activites": "at Sparrow Springs Hiking (20 miles); Paddling; Fishing; Picnicking at Linwood Hiking (4 miles); Picnicking; Rock climbing at Boulders Hiking (6 miles); Picnicking; Bouldering",
  "suggesthike": "Crowders Triple Peak",
  "lengthsuggesthike": "12.9",
  "difsughike": "intermediate/difficult",
  "placeholder": "0"
}, {
  "parkname": "Dismal Swamp State Park",
  "lat": "36.52445357",
  "long": "-76.32947097",
  "parkphone": "252-771-6593",
  "nameicecream": "Scoops Ice Cream Shop",
  "addressicecream": "1825 Shortcut Rd, Shawboro, NC 27973",
  "distanceicecream": "21.5",
  "activites": "Hiking (21.5 miles); Biking (21.5 miles); Paddling; Fishing; Picnicking",
  "suggesthike": "Supple Jack Trail",
  "lengthsuggesthike": "1.5",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Elk Knob State Park",
  "lat": "36.33442929",
  "long": "-81.69583102",
  "parkphone": "828-297-7261",
  "nameicecream": "Ben and Jerry's",
  "addressicecream": "671 W King St, Boone, NC 28607",
  "distanceicecream": "11.2",
  "activites": "Hiking (5.5 miles); Picnicking; Cross-country skiing and snowshoeing (about 1 mile of ungroomed trail and must bring your own equipment)",
  "suggesthike": "Summit Trail",
  "lengthsuggesthike": "3.4",
  "difsughike": "intermediate",
  "placeholder": "0"
}, {
  "parkname": "Eno River State Park",
  "lat": "36.07557601",
  "long": "-79.01229971",
  "parkphone": "919-383-1686",
  "nameicecream": "Ice Cream Club",
  "addressicecream": "3799 Guess Rd, Durham, NC 27705",
  "distanceicecream": "6.9",
  "activites": "at Fews Ford Hiking (13 miles); Horseback riding (3 miles, no horse trailer parking); Paddling; Fishing; Picnicking at Cole Mill Hiking (6 miles); Paddling; Fishing; Picnicking at other accesses Hiking (11 miles); Paddling; Fishing",
  "suggesthike": "Eno Outer Loop",
  "lengthsuggesthike": "7.1",
  "difsughike": "intermediate/difficult",
  "placeholder": "0"
}, {
  "parkname": "Falls Lake State Recreation Area",
  "lat": "36.03063978",
  "long": "-78.69936994",
  "parkphone": "919-676-1027",
  "nameicecream": "Dairy Queen",
  "addressicecream": "12271 Capital Blvd, Wake Forest, NC 27587",
  "distanceicecream": "16",
  "activites": "Hiking (25 miles); Biking (14 miles); Paddling; Swimming; Fishing; Picnicking",
  "suggesthike": "Sandling Beach Lake Trail",
  "lengthsuggesthike": "3",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Fort Fisher State Recreation Area",
  "lat": "33.96562855",
  "long": "-77.91893422",
  "parkphone": "910-458-5798",
  "nameicecream": "Squigley's Ice Cream & Treats",
  "addressicecream": "208 S Lake Park Blvd, Carolina Beach, NC 28428",
  "distanceicecream": "5",
  "activites": "Hiking (1 mile); Paddling; Swimming; Fishing; Picnicking; Four-wheel-drive beach driving",
  "suggesthike": "Basin Trail",
  "lengthsuggesthike": "2.2",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Fort Macon State Park",
  "lat": "34.69972174",
  "long": "-76.69131184",
  "parkphone": "252-726-3775",
  "nameicecream": "Happy Cow Ice Cream",
  "addressicecream": "404 Evans St, Morehead City, NC 28557",
  "distanceicecream": "5.7",
  "activites": "Hiking (4 miles); Biking (4 miles); Paddling (ocean beach); Swimming; Fishing; Picnicking",
  "suggesthike": "Beach Trail",
  "lengthsuggesthike": "3",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Goose Creek State Park",
  "lat": "35.47349651",
  "long": "-76.90994401",
  "parkphone": "252-923-2191",
  "nameicecream": "Dairy Place",
  "addressicecream": "120 Bridge St, Washington, NC 27889",
  "distanceicecream": "12.6",
  "activites": "Hiking (8.5 miles); Paddling; Swimming; Fishing; Picnicking",
  "suggesthike": "Goose Creek Trail",
  "lengthsuggesthike": "4.8",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Gorges State Park",
  "lat": "35.09536387",
  "long": "-82.91386",
  "parkphone": "828-966-9099",
  "nameicecream": "Little Shop of Ice Cream",
  "addressicecream": "366 Pickens Hwy, Rosman, NC 28772",
  "distanceicecream": "11.1",
  "activites": "Hiking (56 miles); Biking (17 miles); Horseback riding (12 miles); Fishing; Picnicking",
  "suggesthike": "Rainbow Falls Trail",
  "lengthsuggesthike": "3.4",
  "difsughike": "intermediate",
  "placeholder": "0"
}, {
  "parkname": "Grandfather Mountain State Park",
  "lat": "36.10652877",
  "long": "-81.81104625",
  "parkphone": "828-963-9522",
  "nameicecream": "Sugar Cream Ice Cream Parlor",
  "addressicecream": "3390 Tynecastle Hwy, Sugar Mountain, NC 28604",
  "distanceicecream": "7.3",
  "activites": "Hiking (13 miles)",
  "suggesthike": "Peaks of Grandfather Mountain",
  "lengthsuggesthike": "9.1",
  "difsughike": "difficult",
  "placeholder": "0"
}, {
  "parkname": "Hammocks Beach State Park",
  "lat": "34.67214084",
  "long": "-77.14148631",
  "parkphone": "910-326-4881",
  "nameicecream": "Dairy Queen",
  "addressicecream": "709 W Corbett Ave, Swansboro, NC 28584",
  "distanceicecream": "2",
  "activites": "Hiking (2.3 miles of trails mainland; 4 miles of beach); Paddling; Swimming; Fishing; Picnicking",
  "suggesthike": "Coastal Fringe Trail",
  "lengthsuggesthike": "0.8",
  "difsughike": "moderate",
  "placeholder": "0"
}, {
  "parkname": "Hanging Rock State Park",
  "lat": "36.4117279",
  "long": "-80.25418961",
  "parkphone": "336-593-8480",
  "nameicecream": "Rocky's Coffee & Ice Cream",
  "addressicecream": "504 Main St, Danbury, NC 27016",
  "distanceicecream": "3.2",
  "activites": "Hiking (48 miles); Biking (15 miles); Horseback riding (6 miles); Paddling; Swimming (seasonal); Fishing; Picnicking; Rock climbing",
  "suggesthike": "Hanging Rock Trail",
  "lengthsuggesthike": "2.7",
  "difsughike": "intermediate/difficult",
  "placeholder": "0"
}, {
  "parkname": "Haw River State Park",
  "lat": "36.25342668",
  "long": "-79.75556121",
  "parkphone": "336-342-6163",
  "nameicecream": "Koolies Coffee & Creamery",
  "addressicecream": "5820 N Church St, Greensboro, NC 27455",
  "distanceicecream": "3.8",
  "activites": "at The Summit Hiking (2.5 miles); Fishing; Picnicking at Iron Ore Belt Hiking (4 miles); Picnicking",
  "suggesthike": "Great Blue Heron Loop",
  "lengthsuggesthike": "3.4",
  "difsughike": "easy/intermediate",
  "placeholder": "0"
}, {
  "parkname": "Jockey's Ridge State Park",
  "lat": "35.96351896",
  "long": "-75.63288441",
  "parkphone": "252-441-7132",
  "nameicecream": "Jockey's Ridge Creamery",
  "addressicecream": "3941 S Croatan Hwy #9796, Nags Head, NC 27959",
  "distanceicecream": "1.2",
  "activites": "at main access Hiking (1 mile); Picnicking; Hang gliding at soundside access Hiking (0.75 mile); Paddling; Swimming; Kiteboarding; Windsurfing",
  "suggesthike": "Tracks in the Sand Trail",
  "lengthsuggesthike": "1.6",
  "difsughike": "intermediate",
  "placeholder": "0"
}, {
  "parkname": "Jones Lake State Park",
  "lat": "34.6841644",
  "long": "-78.59584762",
  "parkphone": "910-588-4550",
  "nameicecream": "Dairy Queen",
  "addressicecream": "1608 White Lake Dr, Elizabethtown, NC 28337",
  "distanceicecream": "10.4",
  "activites": "Hiking (6 miles); Paddling; Swimming; Fishing; Picnicking",
  "suggesthike": "Cedar Loop Trail",
  "lengthsuggesthike": "1.8",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Jordan Lake State Recreation Area",
  "lat": "35.72369787",
  "long": "-79.00988375",
  "parkphone": "919-362-0586",
  "nameicecream": "Cold Stone Creamery",
  "addressicecream": "2050 Creekside Landing Drive, Apex, NC 27502",
  "distanceicecream": "9.9",
  "activites": "Hiking (15 miles); Paddling; Swimming; Fishing; Picnicking",
  "suggesthike": "New Hope Overlook Red Trail",
  "lengthsuggesthike": "5.4",
  "difsughike": "moderate",
  "placeholder": "0"
}, {
  "parkname": "Kerr Lake State Recreation Area",
  "lat": "36.44149767",
  "long": "-78.36887892",
  "parkphone": "252-438-7791",
  "nameicecream": "Freeze Maid Dairy Bar",
  "addressicecream": "193 Parham Rd, Henderson, NC 27536",
  "distanceicecream": "6.7",
  "activites": "Hiking (3 miles); Paddling; Swimming; Fishing; Picnicking",
  "suggesthike": "Kerr Lake Track Trail",
  "lengthsuggesthike": "1.5",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Lake James State Park",
  "lat": "35.75799211",
  "long": "-81.88838238",
  "parkphone": "828-584-7728",
  "nameicecream": "Artesana Ice Cream",
  "addressicecream": "76 S Main St, Marion, NC 28752",
  "distanceicecream": "9.8",
  "activites": "at Paddy's Creek Hiking (22 miles); Biking (14 miles); Paddling; Swimming; Fishing; Picnicking at Catawba River Hiking (4.5 miles); Paddling; Fishing; Picnicking",
  "suggesthike": "Mill's Creek Trail",
  "lengthsuggesthike": "5.8",
  "difsughike": "intermediate",
  "placeholder": "0"
}, {
  "parkname": "Lake Norman State Park",
  "lat": "35.66187874",
  "long": "-80.94167656",
  "parkphone": "704-528-6350",
  "nameicecream": "Andrea's Ice Cream & Sweet Shop",
  "addressicecream": "115 S Center St, Statesville, NC 28677",
  "distanceicecream": "9.6",
  "activites": "Hiking (38 miles); Biking (30.5 miles); Paddling; Swimming; Fishing; Picnicking",
  "suggesthike": "Lake Norman Lake Shore Trail",
  "lengthsuggesthike": "5",
  "difsughike": "intermediate",
  "placeholder": "0"
}, {
  "parkname": "Lake Waccamaw State Park",
  "lat": "34.27849341",
  "long": "-78.46600424",
  "parkphone": "910-646-4748",
  "nameicecream": "Sophie's Café-Bistro",
  "addressicecream": "616 S Madison St, Whiteville, NC 28472",
  "distanceicecream": "18.8",
  "activites": "Hiking (10 miles); Paddling; Fishing; Picnicking",
  "suggesthike": "Sand Ridge Nature Trail",
  "lengthsuggesthike": "0.75",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Lumber River State Park",
  "lat": "34.3914326",
  "long": "-79.00059726",
  "parkphone": "910-628-4564",
  "nameicecream": "Cold Stone Creamery",
  "addressicecream": "140 Wintergreen Dr, Lumberton, NC 28358",
  "distanceicecream": "27.9",
  "activites": "at Princess Ann Hiking (2 miles); Paddling; Fishing; Picnicking at Chalk Banks Hiking (3 miles); Paddling; Fishing; Picnicking",
  "suggesthike": "Chalk Banks Trail",
  "lengthsuggesthike": "3",
  "difsughike": "n/a",
  "placeholder": "0"
}, {
  "parkname": "Mayo River State Park",
  "lat": "36.43623195",
  "long": "-79.94637943",
  "parkphone": "336-427-2530",
  "nameicecream": "Scoops",
  "addressicecream": "128 New Market, Madison, NC 27025",
  "distanceicecream": "4.1",
  "activites": "at Mayo Mountain access Hiking (2 miles); Fishing; Picnicking at other access Hiking (2+ miles); Fishing; Paddling",
  "suggesthike": "Mayo Mountain Loop Trail",
  "lengthsuggesthike": "1.8",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Medoc Mountain State Park",
  "lat": "36.26408561",
  "long": "-77.88628418",
  "parkphone": "252-586-6588",
  "nameicecream": "Chilly Chicken Creamery",
  "addressicecream": "127 S Main St, Warrenton, NC 27589",
  "distanceicecream": "19.6",
  "activites": "Hiking (29 miles); Biking (9 miles); Horseback riding (10 miles); Paddling; Fishing; Picnicking",
  "suggesthike": "Summit Loop Trail",
  "lengthsuggesthike": "3",
  "difsughike": "moderate",
  "placeholder": "0"
}, {
  "parkname": "Merchants Millpond State Park",
  "lat": "36.43687052",
  "long": "-76.69956982",
  "parkphone": "252-357-1191",
  "nameicecream": "East Hampton Ice Cream Moo Moo's",
  "addressicecream": "69 N Main St, East Hampton, NY 11937",
  "distanceicecream": "18",
  "activites": "Hiking (10 miles); Biking (5 miles); Paddling; Fishing; Picnicking",
  "suggesthike": "Coleman Trail",
  "lengthsuggesthike": "2",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Morrow Mountain State Park",
  "lat": "35.37269483",
  "long": "-80.09996641",
  "parkphone": "704-982-4402",
  "nameicecream": "Dairy Queen",
  "addressicecream": "1904 US Highway 52 N, Albemarle, NC 28001",
  "distanceicecream": "7.4",
  "activites": "Hiking (37 miles); Horseback riding (19 miles); Paddling; Swimming (pool, seasonal); Fishing; Picnicking",
  "suggesthike": "Morrow Mountain Trail",
  "lengthsuggesthike": "5.8",
  "difsughike": "intermediate",
  "placeholder": "0"
}, {
  "parkname": "Mount Jefferson State Natural Area",
  "lat": "36.39371263",
  "long": "-81.46829383",
  "parkphone": "336-246-9653",
  "nameicecream": "Southern Scoops and Sandwiches",
  "addressicecream": "215 long St, Jefferson, NC 28640",
  "distanceicecream": "3.7",
  "activites": "Hiking (5 miles); Picnicking",
  "suggesthike": "Rhododendron Trail",
  "lengthsuggesthike": "1.6",
  "difsughike": "easy/intermediate",
  "placeholder": "0"
}, {
  "parkname": "Mount Mitchell State Park",
  "lat": "35.76670991",
  "long": "-82.26414151",
  "parkphone": "828-675-4611",
  "nameicecream": "Hershey's Ice Cream Drive-thru",
  "addressicecream": "101 Lower Georges Fork Rd, Burnsville, NC 28714",
  "distanceicecream": "30",
  "activites": "Hiking (40 miles); Picnicking",
  "suggesthike": "Mount Mitchell Trail",
  "lengthsuggesthike": "11.2",
  "difsughike": "difficult",
  "placeholder": "0"
}, {
  "parkname": "New River State Park",
  "lat": "36.46154664",
  "long": "-81.33877597",
  "parkphone": "336-982-2587",
  "nameicecream": "Southern Scoops and Sandwiches",
  "addressicecream": "215 long St, Jefferson, NC 28640",
  "distanceicecream": "10.7",
  "activites": "Hiking (9 miles); Paddling; Swimming (Elk Shoals access only); Fishing; Picnicking",
  "suggesthike": "221 Access Area: New River TRACK Trail",
  "lengthsuggesthike": "1.2",
  "difsughike": "moderate",
  "placeholder": "0"
}, {
  "parkname": "Occoneechee Mountain State Natural Area",
  "lat": "36.06159157",
  "long": "-79.11740884",
  "parkphone": "919-383-1686",
  "nameicecream": "Kathy Hupp",
  "addressicecream": "240 S Nash St, Hillsborough, NC 27278",
  "distanceicecream": "1.7",
  "activites": "Hiking (3 miles); Fishing; Picnicking",
  "suggesthike": "Occoneechee Mountain Loop Trail",
  "lengthsuggesthike": "2.5",
  "difsughike": "intermediate",
  "placeholder": "0"
}, {
  "parkname": "Pettigrew State Park",
  "lat": "35.7957557",
  "long": "-76.42047154",
  "parkphone": "252-797-4475",
  "nameicecream": "The Freeze",
  "addressicecream": "320 W Queen St, Edenton, NC 27932",
  "distanceicecream": "27.3",
  "activites": "Hiking (9 miles); Biking (9 miles); Paddling; Swimming; Fishing; Picnicking",
  "suggesthike": "Moccasin Trail",
  "lengthsuggesthike": "5.6",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "Pilot Mountain State Park",
  "lat": "36.34331309",
  "long": "-80.47473975",
  "parkphone": "336-444-5100",
  "nameicecream": "Dairi-O of King",
  "addressicecream": "365 E Dalton Rd, King, NC 27021",
  "distanceicecream": "8.3",
  "activites": "at mountain section Hiking (14 miles); Picnicking; Rock climbing at river section Hiking (14 miles); Horseback riding (9 miles); Paddling; Fishing; Picnicking",
  "suggesthike": "Grindstone Trail",
  "lengthsuggesthike": "7",
  "difsughike": "strenuous",
  "placeholder": "0"
}, {
  "parkname": "Raven Rock State Park",
  "lat": "35.46582519",
  "long": "-78.90592447",
  "parkphone": "910-893-4888",
  "nameicecream": "Beans & Cream",
  "addressicecream": "810 S Main St, Lillington, NC 27546",
  "distanceicecream": "5.1",
  "activites": "Hiking (26 miles); Biking (6.6 miles); Horseback riding (8 miles); Paddling; Fishing; Picnicking",
  "suggesthike": "Racven Rock Loop Trail",
  "lengthsuggesthike": "2.2",
  "difsughike": "easy/intermediate",
  "placeholder": "0"
}, {
  "parkname": "Singletary Lake State Park",
  "lat": "34.58247974",
  "long": "-78.43975289",
  "parkphone": "910-669-2928",
  "nameicecream": "Dairy Queen",
  "addressicecream": "1608 White Lake Dr, Elizabethtown, NC 28337",
  "distanceicecream": "5.3",
  "activites": "Day-use Hiking (1 mile); Paddling; Fishing",
  "suggesthike": "CCC Loop Trail",
  "lengthsuggesthike": "1",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "South Mountains State Park",
  "lat": "35.61139884",
  "long": "-81.68289529",
  "parkphone": "828-433-4772",
  "nameicecream": "Scoopers Shaved Ice And Creamery",
  "addressicecream": "305 Old North Carolina 18, Morganton, NC 28655",
  "distanceicecream": "14.3",
  "activites": "at Jacob Fork access Hiking (47 miles); Biking (17 miles); Horseback riding (35 miles); Fishing; Picnicking at Clear Creek access Hiking (3.5 miles); Horseback riding (2 miles); Paddling; Fishing",
  "suggesthike": "Chesnut Knob Trail",
  "lengthsuggesthike": "4.2",
  "difsughike": "strenuous",
  "placeholder": "0"
}, {
  "parkname": "Stone Mountain State Park",
  "lat": "36.38519453",
  "long": "-81.02017039",
  "parkphone": "336-957-8185",
  "nameicecream": "Tooty Fruity",
  "addressicecream": "6 S Main St, Sparta, NC 28675",
  "distanceicecream": "15.9",
  "activites": "Hiking (29 miles); Horseback riding (10 miles); Fishing; Picnicking; Rock climbing",
  "suggesthike": "Stone Mountain Loop Trail",
  "lengthsuggesthike": "4.4",
  "difsughike": "intermediate/difficult",
  "placeholder": "0"
}, {
  "parkname": "Weymouth Woods Sandhills Nature Preserve",
  "lat": "35.14760348",
  "long": "-79.36894442",
  "parkphone": "910-692-2167",
  "nameicecream": "The Ice Cream Parlor Restaurant",
  "addressicecream": "176 NW Broad St, Southern Pines, NC 28387",
  "distanceicecream": "3.1",
  "activites": "at Weymouth Woods Hiking (7 miles); Horseback riding (2.5 miles, no horse trailer parking); Picnicking at Boyd Hiking (1 mile); Picnicking at Paint Hill Hiking (1 mile)",
  "suggesthike": "Pine Island Trail",
  "lengthsuggesthike": "1",
  "difsughike": "easy",
  "placeholder": "0"
}, {
  "parkname": "William B. Umstead State Park",
  "lat": "35.89043548",
  "long": "-78.75146",
  "parkphone": "919-571-4170",
  "nameicecream": "Cold Stone Creamery",
  "addressicecream": "7840 Alexander Promenade PI #140, Raleigh, NC 27617",
  "distanceicecream": "2.7",
  "activites": "Hiking (34.5 miles); Biking (13 miles); Horseback riding (13 miles); Paddling; Fishing; Picnicking, Company Mill Trail",
  "lengthsuggesthike": "5.1",
  "difsughike": "intermediate",
  "placeholder": "0"
}];

/*
import {data} from "data.js";
console.log(data);
*/

/*
var userLat = 35.50071444;
var userLong = -80.84472615;
/*
var userHours = 4;
var userMinutes = 17;
*/
var parkLat = 34.67214084;
var parkLong = -77.14148631;

function haversineFormula(userLat, userLong, parkLat, parkLong) {
  var radUserLat = parseFloat(userLat) * (Math.PI / 180);
  var radUserLong = parseFloat(userLong) * (Math.PI / 180);
  var radParkLat = parseFloat(parkLat) * (Math.PI / 180);
//  console.log(parseFloat(parkLat));
  var radParkLong = parseFloat(parkLong) * (Math.PI / 180);
//   console.log(parseFloat(userLat));
//console.log(parseFloat(userLong));
  var difLat = radParkLat - radUserLat;
  var difLong = radParkLong - radUserLong;

  var haversineOne = Math.sin(difLat / 2) * Math.sin(difLat / 2) + Math.cos(radUserLat) * Math.cos(radParkLat) * Math.sin(difLong / 2) * Math.sin(difLong / 2);

  var haversineTwo = 2 * 6378 * Math.asin(Math.sqrt(haversineOne));

  var havmiles = haversineTwo * 0.621371;

  return havmiles;
}

function timeToHikingMiles(userHours, userMinutes) {
  var totalTime = (parseFloat(userHours) * 60) + parseFloat(userMinutes);
  var totalMiles = parseFloat(totalTime) / '25';
  return totalMiles;
}

/*
function timeToHikingMiles(userHours, userMinutes){
  return ((userHours * 60) + userMinutes)/25;
}
*/
/*
//Go through every park lat/long & calculate distance between park and user
for(let i = 0; i < data.length; i++){
	data[i].haversine = convertToMiles(data[i].lat)
}
*/
/*
for(let i=0; i< data.length; i++){
var latarray = [];
  data.push(data[i].lat)[i];

return latarray;
}
*/

$("#findmyparkbutton").on("click", function() {
  var userHours = document.getElementById("hours").value;
//   alert(userHours);
  var userMinutes = document.getElementById("minutes").value;
//  alert(userMinutes);
  var userLat = document.getElementById("latitude").value;
//   alert(userLat);
  var userLong = document.getElementById("longitude").value;
// alert(userLong);

for(let i = 0; i < data.length; i++){
	data[i].haversine = haversineFormula(userLat, userLong, data[i].lat, data[i].long);
//  console.log(data[i]);
}

function compare( a, b ) {
  if ( a.haversine < b.haversine ){
    return -1;
  }
  if ( a.haversine > b.haversine ){
    return 1;
  }
  return 0;
}

//  data.sort( compare );
console.log(  data.sort( compare ));
  //alert(haversineFormula(userLat, userLong, parkLat, parkLong)); //works (parkLat & long hard coded)

  //alert(timeToHikingMiles(userHours, userMinutes));
  /* idea, create an array for lat and an array of all the park long points. for loop through in haversine but issue - then would have to back track index
  var latarray = [];

  for(let i=0; i< data.length; i++){
    latarray.push(data[i].lat);
  return latarray;
  }
  */
  document.getElementById("stateparkname").innerHTML = data[0].parkname;
  document.getElementById("milestohike").innerHTML = data[0].totalMiles; //fix this
document.getElementById("activites").innerHTML = data[0].activites;
});

/*
var counter = 0;
$("#").on("click", function() {
  counter ++;
  document.getElementById("activites").innerHTML = data[counter].activites;

});
*/
