const TEST = {
  id: "test32",
  grade: "Grade 6 — Global Success",
  unit: "Unit 4: My neighbourhood",
  title: "Grade 6 · Unit 4: My neighbourhood · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test32.html",
  instructions: [
    "Bài kiểm tra gồm 40 câu, chia thành 7 phần (I → VII), tổng 10 điểm.",
    "Bấm chọn đáp án A/B/C/D cho câu trắc nghiệm, hoặc gõ câu trả lời vào ô trống cho câu điền từ / viết lại câu.",
    "Em có thể dùng nút Previous / Next hoặc bấm số câu ở bảng điều hướng để di chuyển giữa các câu.",
    "Khi hết giờ, bài làm sẽ tự động được nộp.",
    "Sau khi nộp bài, em sẽ thấy điểm số, đáp án đúng và giải thích chi tiết cho từng câu."
  ],
  sections: [
    { id: "I", title: "Choose the word / phrase / sentence (A, B, C or D) that best fits the space or best answers the question given in each sentence.", points: "3.5 pts", range: [1, 14] },
    { id: "II", title: "Look at the sign or the notice. Choose the best answer (A, B, C or D).", points: "0.5 pt", range: [15, 16] },
    { id: "III", title: "Choose the word (A, B, C or D) that best fits each space in the following passage.", points: "1.5 pts", range: [17, 22] },
    { id: "IV", title: "Read the passage. Decide True/False (23–26) and choose the best answer (27–28).", points: "1.5 pts", range: [23, 28] },
    { id: "V", title: "Use the correct form of the word given in each sentence.", points: "1.5 pts", range: [29, 34] },
    { id: "VI", title: "Look at the dictionary entry of “neighbourhood”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    alexCloze: "My friend Alex lives near me in the countryside. He comes (17) ________ Canada. We have been classmates and neighbors (18) ________ two years. Alex's family has a farm. He usually helps his parents take care of the animals and plants after school. Alex enjoys (19) ________ outside and hopes to be a farmer one day. He believes farming is a (20) ________ job. Currently, he (21) ________ studying agriculture at school because he wants to learn more about farming. He studies really (22) ________ because he knows it will help him in the future.",
    londonReading: "London is the capital city of the United Kingdom. There are a lot of cars in the city. People go everywhere by car, so traffic in the city centre is heavier than that in the suburbs. It is harder to find a place to park a car than to do it in other areas. The public means of transport is cheaper than cars but the Londoners prefer their own cars. Moreover, there are more and more tourists and visitors coming to London for sightseeing or shopping. At weekends, the streets are noisier and busier than they are on weekdays. Now, traffic jams are worse than ever before. Although the living cost in the suburbs and the countryside is cheaper than that in the city centre, most young people prefer living in the city centre. London is richer than other cities in the United Kingdom, but it is more polluted because of the city's industry, vehicles, and plenty of people.",
    neighbourhoodEntry: {
      word: "neighbourhood", ipa: "/ˈneɪbəhʊd/", pos: "noun",
      def: "a district or an area where people live.",
      examples: [
        "We live in a <b>quiet neighbourhood</b> just outside the city.",
        "There are a few shops in the <b>immediate neighbourhood</b> (the area very close to you).",
        "She grew up in a <b>poor neighbourhood</b> of Chicago.",
        "They are causing trouble for people in the <b>entire neighbourhood</b>."
      ]
    }
  },
  images: {
    noticeElephantFeeding: "assets/images/notice_elephant_feeding.jpg",
    signNoDiving: "assets/images/sign_no_diving.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "factory", B: "narrow", C: "pagoda", D: "gallery" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái \"a\". \"factory\" /ˈfæktəri/, \"narrow\" /ˈnæroʊ/, \"gallery\" /ˈɡæləri/ đều có \"a\" phát âm là <b>/æ/</b>. Riêng \"pagoda\" /pəˈɡoʊdə/ có \"a\" (âm tiết đầu) phát âm là <b>/ə/</b> → khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "cinema", B: "city", C: "café", D: "centre" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái \"c\". \"cinema\" /ˈsɪnəmə/, \"city\" /ˈsɪti/, \"centre\" /ˈsentər/ đều có \"c\" phát âm là <b>/s/</b>. Riêng \"café\" /kæˈfeɪ/ có \"c\" phát âm là <b>/k/</b> → khác biệt, đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "decide", B: "station", C: "helpful", D: "famous" },
      correct: "A",
      explanation: "\"station\" /ˈsteɪʃn/, \"helpful\" /ˈhelpfl/, \"famous\" /ˈfeɪməs/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"decide\" /dɪˈsaɪd/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "delicious", B: "fantastic", C: "countryside", D: "expensive" },
      correct: "C",
      explanation: "\"delicious\" /dɪˈlɪʃəs/, \"fantastic\" /fænˈtæstɪk/, \"expensive\" /ɪkˈspensɪv/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"countryside\" /ˈkʌntrisaɪd/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Alex: \"Christmas is coming! It's a very ______ time of year for my shop.\"",
      prompt: "Ben: \"I agree. Everyone is shopping for gifts.\"",
      display: { A: "freedom", B: "relaxing", C: "busy", D: "prisoner" },
      correct: "C",
      explanation: "Mùa Giáng sinh mọi người đi mua sắm nhiều → đây là thời điểm \"<b>busy</b>\" (bận rộn) đối với cửa hàng."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Tourist: \"I heard the Red River is very famous.\"",
      prompt: "Guide: \"Yes, it is one of the longest ______ in Viet Nam.\"",
      display: { A: "countries", B: "lakes", C: "cities", D: "rivers" },
      correct: "D",
      explanation: "\"the Red River\" là một con sông → \"one of the longest <b>rivers</b>\" (những con sông dài nhất)."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Tom: \"Look at those fresh tomatoes! Where do they come from?\"",
      prompt: "Jerry: \"My father grows all these vegetables in his ______.\"",
      display: { A: "classroom", B: "wardrobe", C: "bookstore", D: "backyard" },
      correct: "D",
      explanation: "Trồng rau thường ở \"<b>backyard</b>\" (sân sau nhà)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Lisa: \"Why don't you like living in the city centre?\"",
      prompt: "Rose: \"Because it is always crowded and ______. I prefer the countryside.\"",
      display: { A: "quiet", B: "convenient", C: "noisy", D: "peaceful" },
      correct: "C",
      explanation: "Trung tâm thành phố thường đông đúc và \"<b>noisy</b>\" (ồn ào), trái ngược với vùng nông thôn yên tĩnh."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Driver: \"Is the Green Hotel near here?\"",
      prompt: "Police: \"Go to the end of the road. It's on your ______, next to the bank.\"",
      display: { A: "left", B: "leg", C: "direction", D: "turn" },
      correct: "A",
      explanation: "\"on your <b>left</b>\" (bên trái của bạn) là cách chỉ đường phổ biến."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Mom: \"What time do you go ______ school, Peter?\"",
      prompt: "Peter: \"Usually at 6:30 a.m., Mom.\"",
      display: { A: "for", B: "against", C: "at", D: "to" },
      correct: "D",
      explanation: "\"go <b>to</b> school\" là cụm động từ cố định (đi đến trường)."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Reporter: \"How is the environment here?\"",
      prompt: "Expert: \"Air quality in this area is much ______ than it was a few years ago.\"",
      display: { A: "more bad", B: "badder", C: "worse", D: "most bad" },
      correct: "C",
      explanation: "So sánh hơn bất quy tắc của \"bad\" là \"<b>worse</b>\", không phải \"more bad\" hay \"badder\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Anna: \"Alex is from ______ , right?\"",
      prompt: "Mark: \"Yes, he's Canadian. He moved here two years ago.\"",
      display: { A: "Canadian", B: "Canada", C: "the Canada", D: "America" },
      correct: "B",
      explanation: "Sau \"from\" cần tên quốc gia: \"from <b>Canada</b>\" (không dùng tính từ chỉ quốc tịch \"Canadian\" hay thêm \"the\" trước tên nước)."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Neighbor: \"How is Alex's life on the farm?\"",
      prompt: "Classmate: \"He usually helps his parents ______ the animals after school.\"",
      display: { A: "takes care of", B: "take care of", C: "taking care", D: "taking care of" },
      correct: "B",
      explanation: "Cấu trúc \"help sb + V (nguyên mẫu không \"to\")\": \"helps his parents <b>take care of</b> the animals\"."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Stranger: \"Excuse me, how can I get to the railway station?\"",
      prompt: "Local: \"______\"",
      display: {
        A: "Because there are many malls around.",
        B: "That's a good idea.",
        C: "It's ten minutes.",
        D: "Go straight and turn left. It's on your right."
      },
      correct: "D",
      explanation: "Câu hỏi \"how can I get to...?\" (làm sao để đến...) cần câu trả lời chỉ đường cụ thể: \"<b>Go straight and turn left. It's on your right.</b>\""
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeElephantFeeding",
      prompt: "What does the notice mean?",
      display: {
        A: "Visitors can feed the elephants themselves at 11:00 a.m.",
        B: "Visitors must not look at the elephants at this time.",
        C: "Only elephants can eat at 11:00 a.m.",
        D: "Visitors can see how elephants are fed at 11:00 a.m."
      },
      correct: "D",
      explanation: "Biển gỗ ghi \"VISITORS CAN SEE HOW ELEPHANTS ARE FED AT 11:00 A.M.\" → du khách có thể xem cách cho voi ăn lúc 11 giờ sáng, đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signNoDiving",
      prompt: "What does the sign mean?",
      display: {
        A: "You should dive carefully.",
        B: "It is safe to dive here.",
        C: "You mustn't dive here because it is dangerous.",
        D: "Diving is allowed for everyone."
      },
      correct: "C",
      explanation: "Biểu tượng người nhảy lộn xuống nước bị gạch chéo trong vòng tròn đỏ → cấm nhảy xuống vì nguy hiểm, đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "alexCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "at", B: "from", C: "in", D: "to" },
      correct: "B",
      explanation: "\"comes <b>from</b> + tên quốc gia\" là cụm cố định (đến từ đâu)."
    },
    { id: 18, section: "III", type: "mcq", passage: "alexCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "since", B: "during", C: "in", D: "for" },
      correct: "D",
      explanation: "\"<b>for</b> + khoảng thời gian\" (two years) dùng để chỉ độ dài thời gian kéo dài liên tục."
    },
    { id: 19, section: "III", type: "mcq", passage: "alexCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "worked", B: "work", C: "working", D: "to work" },
      correct: "C",
      explanation: "\"enjoy + V-ing\" là cấu trúc cố định (thích thú làm gì): \"enjoys <b>working</b> outside\"."
    },
    { id: 20, section: "III", type: "mcq", passage: "alexCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "rewarding", B: "boring", C: "tiring", D: "difficult" },
      correct: "A",
      explanation: "\"farming is a <b>rewarding</b> job\" — tính từ tích cực phù hợp với thái độ yêu thích nghề nông của Alex."
    },
    { id: 21, section: "III", type: "mcq", passage: "alexCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "be", B: "was", C: "are", D: "is" },
      correct: "D",
      explanation: "Chủ ngữ \"he\" (số ít) ở thì hiện tại tiếp diễn dùng \"<b>is</b> + V-ing\"."
    },
    { id: 22, section: "III", type: "mcq", passage: "alexCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "hardly", B: "fast", C: "heavy", D: "hard" },
      correct: "D",
      explanation: "\"studies really <b>hard</b>\" — trạng từ \"hard\" (chăm chỉ) bổ nghĩa cho động từ \"studies\", khác với \"hardly\" (hầu như không)."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "londonReading",
      prompt: "Driving a car in the city centre is easier than driving in the suburbs.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"It is harder to find a place to park a car [in the city centre] than to do it in other areas.\" — lái xe/đỗ xe ở trung tâm khó hơn, không dễ hơn."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "londonReading",
      prompt: "Public transport in London costs less money than using a personal car.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"The public means of transport is cheaper than cars.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "londonReading",
      prompt: "The streets in London are quieter at weekends than on weekdays.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"At weekends, the streets are noisier and busier than they are on weekdays.\" — ồn ào và đông đúc hơn vào cuối tuần, không yên tĩnh hơn."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "londonReading",
      prompt: "Many young people like to live in the centre of London.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"most young people prefer living in the city centre.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "londonReading",
      prompt: "Why is London more polluted than other cities in the United Kingdom?",
      display: { A: "Because of the city's industry, cars, and many people.", B: "Because it has beautiful streets.", C: "Because there are too many shops and tourists.", D: "Because the living cost is very cheap." },
      correct: "A",
      explanation: "Bài đọc: \"it is more polluted because of the city's industry, vehicles, and plenty of people.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "londonReading",
      prompt: "According to the text, what is true about traffic jams in London now?",
      display: { A: "They are worse than ever before.", B: "They are better than before.", C: "They only happen at weekends.", D: "They do not happen in the suburbs." },
      correct: "A",
      explanation: "Bài đọc: \"traffic jams are worse than ever before.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "London is a very wealthy city, but it is also highly ____________.",
      wordGiven: "POLLUTE", accepted: ["polluted"], correct: "polluted",
      explanation: "Cần tính từ sau \"highly\". <b>pollute</b> (v) → <b>polluted</b> (adj, +ed, bị ô nhiễm)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Last weekend, my family visited many ____________ houses in the old town.",
      wordGiven: "HISTORY", accepted: ["historic"], correct: "historic",
      explanation: "Cần tính từ đứng trước danh từ \"houses\". <b>history</b> (n) → <b>historic</b> (adj, mang tính lịch sử)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The children played ____________ in the new playground all afternoon.",
      wordGiven: "NOISE", accepted: ["noisily"], correct: "noisily",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"played\". <b>noise</b> (n) → <b>noisy</b> (adj) → <b>noisily</b> (adv, +ly)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "I love the countryside because it is so ____________ and quiet.",
      wordGiven: "PEACE", accepted: ["peaceful"], correct: "peaceful",
      explanation: "Cần tính từ song song với \"quiet\". <b>peace</b> (n) → <b>peaceful</b> (adj, +ful)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "The park was full of ____________ flowers and tall trees.",
      wordGiven: "BEAUTY", accepted: ["beautiful"], correct: "beautiful",
      explanation: "Cần tính từ đứng trước danh từ \"flowers\". <b>beauty</b> (n) → <b>beautiful</b> (adj, +ful, đẹp)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Exploring a new neighborhood is a very ____________ experience.",
      wordGiven: "EXCITE", accepted: ["exciting"], correct: "exciting",
      explanation: "Cần tính từ đứng trước danh từ \"experience\". <b>excite</b> (v) → <b>exciting</b> (adj, +ing, thú vị)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "neighbourhoodEntry",
      prompt: "The loud music from the party last night woke up the ____________________ and people were very angry.",
      accepted: ["entire neighbourhood", "entire neighborhood"], correct: "entire neighbourhood",
      explanation: "Từ điển cho ví dụ \"They are causing trouble for people in the <b>entire neighbourhood</b>.\" — khớp với ngữ cảnh cả khu phố bị làm phiền."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "neighbourhoodEntry",
      prompt: "We love our new house because it is located in a ____________________ with lots of trees and no traffic noise.",
      accepted: ["quiet neighbourhood", "quiet neighborhood"], correct: "quiet neighbourhood",
      explanation: "Từ điển cho ví dụ \"We live in a <b>quiet neighbourhood</b> just outside the city.\" — khớp với ngữ cảnh khu phố yên tĩnh, nhiều cây xanh."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Can you tell me the way to the train station?",
      starter: "Where is",
      accepted: ["where is the train station"],
      correct: "Where is the train station?",
      explanation: "\"Can you tell me the way to + địa điểm?\" (cách hỏi đường lịch sự) có nghĩa tương đương với câu hỏi trực tiếp \"<b>Where is + địa điểm?</b>\".<br>→ <i>Where is the train station?</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "No park in this town is larger than this one.",
      starter: "This is the",
      accepted: ["this is the largest park in this town"],
      correct: "This is the largest park in this town.",
      explanation: "\"No + N + is + more/adj-er + than + X\" (so sánh hơn phủ định) có nghĩa tương đương với so sánh nhất \"<b>X + is + the + adj-est + N</b>\".<br>→ <i>This is the largest park in this town.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "The alley is very tight, so trucks can't drive through.",
      starter: "Trucks can't drive through the alley",
      accepted: ["trucks can't drive through the alley because it's very tight", "trucks can't drive through the alley because it is very tight"],
      correct: "Trucks can't drive through the alley because it's very tight.",
      explanation: "Câu với \"..., so + kết quả\" có thể viết lại bằng \"<b>kết quả + because + nguyên nhân</b>\", đảo trật tự nhưng giữ nguyên nghĩa.<br>→ <i>Trucks can't drive through the alley because it's very tight.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Air quality in the city used to be better a few years ago.",
      starter: "Air quality in the city is",
      accepted: ["air quality in the city is worse than it was a few years ago", "air quality in the city is not as good as it used to be a few years ago"],
      correct: "Air quality in the city is worse than it was a few years ago.",
      explanation: "\"used to be + adj (tốt hơn trong quá khứ)\" có nghĩa tương đương với so sánh hơn ở hiện tại \"<b>is + adj so sánh hơn + than it was</b>\" hoặc so sánh ngang bằng phủ định \"<b>is not as good as it used to be</b>\".<br>→ <i>Air quality in the city is worse than it was a few years ago.</i>"
    }
  ]
};
