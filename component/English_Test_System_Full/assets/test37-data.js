const TEST = {
  id: "test37",
  grade: "Grade 7 — Global Success",
  unit: "Unit 1: Hobbies",
  title: "Grade 7 · Unit 1: Hobbies · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test37.html",
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
    { id: "VI", title: "Look at the dictionary entry of “hobby”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    hobbyCloze: "Nowadays, teenagers seem to be too busy with their studies to (17) ________ up a hobby. However, if you have a little (18) ________ time, it is advisable to have a hobby because of the emotional, mental and physical benefits it brings. Focusing on an activity (19) ________ you like will help you reduce stress and pressure from your schoolwork. Additionally, spending time with people of similar interests will (20) ________ you to make friends more easily. This helps improve your communication skills and promote teamwork. Taking up a hobby can be a real challenge, but it is not the type of stressful challenge coming (21) ________ school. Instead, challenging yourself to do a skill that you like will bring (22) ________ and pride.",
    hobbyDefinitionReading: "Our life would be hard without rest and recreation. And people have many different ideas of how to spend their free time. If you enjoy doing a thing or activity in your free time, then you have a hobby. A hobby is an activity, interest, enthusiasm, or pastime that is undertaken for pleasure or relaxation, done during one's own time. A person's hobbies depend on his age, character and personal interests. An interesting thing to one person can be boring to another. That's why some people prefer reading, cooking, knitting, collecting, playing a musical instrument, photography or playing computer games while others prefer dancing, travelling, camping or sports.",
    hobbyEntry: {
      word: "hobby", ipa: "/ˈhɒbi/", pos: "noun",
      def: "an activity that you do for pleasure when you are not working.",
      examples: [
        "I only take photos for fun—it's just a <b>hobby of mine</b>.",
        "What are your <b>favorite hobbies</b>?",
        "My grandmother <b>takes up</b> knitting as a <b>new hobby</b>.",
        "He needs to find a <b>healthy hobby</b> to reduce stress after school."
      ]
    }
  },
  images: {
    signNoPhotos: "assets/images/sign_no_photos.jpg",
    signWetPaint: "assets/images/sign_wet_paint.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "amount", B: "favourite", C: "plane", D: "patient" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"a\". \"favourite\" /ˈfeɪvərɪt/, \"plane\" /pleɪn/, \"patient\" /ˈpeɪʃnt/ đều có \"a\" phát âm là <b>/eɪ/</b>. Riêng \"amount\" /əˈmaʊnt/ có \"a\" phát âm là <b>/ə/</b> (âm câm, không nhấn) → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "teach", B: "suitable", C: "action", D: "painting" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái \"t\". \"teach\" /tiːtʃ/, \"suitable\" /ˈsuːtəbl/, \"painting\" /ˈpeɪntɪŋ/ đều có \"t\" phát âm là <b>/t/</b>. Riêng \"action\" /ˈækʃn/ có \"t\" (trong \"-tion\") phát âm là <b>/ʃ/</b> → khác biệt, đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "early", B: "judo", C: "begin", D: "insect" },
      correct: "C",
      explanation: "\"early\" /ˈɜːrli/, \"judo\" /ˈdʒuːdoʊ/, \"insect\" /ˈɪnsekt/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"begin\" /bɪˈɡɪn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "basketball", B: "valuable", C: "unusual", D: "popular" },
      correct: "C",
      explanation: "\"basketball\" /ˈbæskɪtbɔːl/, \"valuable\" /ˈvæljuəbl/, \"popular\" /ˈpɒpjələr/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"unusual\" /ʌnˈjuːʒuəl/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"Do you like __________ models, Linda?\"",
      prompt: "Linda: \"Yes, I love building small cars and planes in my free time.\"",
      display: { A: "playing", B: "riding", C: "going", D: "making" },
      correct: "D",
      explanation: "\"<b>making</b> models\" (làm mô hình) phù hợp với việc \"building small cars and planes\" được nhắc đến."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Nam: \"Your cousin has a wonderful stamp collection!\"",
      prompt: "Lan: \"Yes, he is a famous __________ in our city.\"",
      display: { A: "collection", B: "collector", C: "collect", D: "collecting" },
      correct: "B",
      explanation: "Cần danh từ chỉ người sau \"a famous\". <b>collect</b> (v) → <b>collector</b> (n, +or, người sưu tầm)."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Peter: \"How __________ does Jack go to the judo club?\"",
      prompt: "Mary: \"Three times a week. He really loves martial arts.\"",
      display: { A: "many", B: "far", C: "long", D: "often" },
      correct: "D",
      explanation: "\"How <b>often</b>...?\" (bao lâu một lần) dùng để hỏi tần suất, phù hợp với câu trả lời \"Three times a week\"."
    },
    { id: 8, section: "I", type: "mcq",
      context: "An: \"Please be careful! All of the things in this box are very __________.\"",
      prompt: "Binh: \"Okay, I will move the box slowly.\"",
      display: { A: "fragile", B: "gallery", C: "carved", D: "collage" },
      correct: "A",
      explanation: "\"<b>fragile</b>\" (dễ vỡ) phù hợp với lời cảnh báo cẩn thận khi di chuyển đồ vật."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Elena: \"Will you __________ making models in the future?\"",
      prompt: "David: \"Yes, I want to try this new hobby next year.\"",
      display: { A: "take up", B: "pick up", C: "look for", D: "find" },
      correct: "A",
      explanation: "\"<b>take up</b> + hobby\" (bắt đầu theo đuổi một sở thích mới) là cụm động từ cố định."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Lucy: \"Where can I share my stamps with other collectors?\"",
      prompt: "Mark: \"You can do that __________ a stamp club on weekends.\"",
      display: { A: "to", B: "with", C: "in", D: "at" },
      correct: "D",
      explanation: "\"<b>at</b> a club\" — giới từ \"at\" dùng để chỉ địa điểm/tổ chức cụ thể."
    },
    { id: 11, section: "I", type: "mcq",
      context: "John: \"Nowadays, many teenagers __________ hours sitting in front of computers.\"",
      prompt: "Nick: \"That's true. They should go outside and play sports more.\"",
      display: { A: "spend", B: "take", C: "last", D: "set" },
      correct: "A",
      explanation: "\"<b>spend</b> + thời gian + V-ing\" (dành thời gian làm gì) là cấu trúc cố định."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Teacher: \"Is your hobby useful, Minh?\"",
      prompt: "Minh: \"__________\"",
      display: { A: "Hobbies are only useful for children.", B: "Yes, hobbies can help develop skills and reduce stress.", C: "No, hobbies are just for wasting time.", D: "Only expensive hobbies are useful." },
      correct: "B",
      explanation: "\"<b>Yes, hobbies can help develop skills and reduce stress.</b>\" là câu trả lời hợp lý nhất, trực tiếp trả lời câu hỏi \"Is your hobby useful?\" với lý do cụ thể."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Alex: \"I enjoy painting and cycling in my free time. What's your hobby?\"",
      prompt: "Mary: \"__________\"",
      display: { A: "That's cool!", B: "I love making pottery and doing bird-watching on weekends.", C: "I don't know anything.", D: "It helps me relax and learn new things." },
      correct: "B",
      explanation: "Câu hỏi \"What's your hobby?\" cần một câu trả lời nêu rõ sở thích cụ thể: \"<b>I love making pottery and doing bird-watching on weekends.</b>\""
    },
    { id: 14, section: "I", type: "mcq",
      context: "Peter: \"Your new book collection looks amazing!\"",
      prompt: "Jane: \"__________\"",
      display: { A: "Thanks! I would like to open a library of my own in the future.", B: "You can buy it near my house.", C: "I don't have money.", D: "Books are boring." },
      correct: "A",
      explanation: "\"<b>Thanks! I would like to open a library of my own in the future.</b>\" là lời đáp tự nhiên nhất cho lời khen về bộ sưu tập sách."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoPhotos",
      prompt: "What does this sign mean?",
      display: {
        A: "You mustn't take photos here.",
        B: "You should take photos here.",
        C: "You needn't take photos here.",
        D: "You can take photos here."
      },
      correct: "A",
      explanation: "Biển có hình máy ảnh bị gạch chéo đỏ nghĩa là cấm chụp ảnh → \"<b>You mustn't take photos here.</b>\", đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signWetPaint",
      prompt: "What does this notice tell you?",
      display: {
        A: "The paint is still wet, so please do not touch it.",
        B: "You are encouraged to touch the paint.",
        C: "The paint is not for public use.",
        D: "The paint is dry and safe to touch."
      },
      correct: "A",
      explanation: "Thông báo \"WET PAINT — Don't TOUCH\" nghĩa là sơn còn ướt, không được chạm vào → \"<b>The paint is still wet, so please do not touch it.</b>\", đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "take", B: "look", C: "get", D: "make" },
      correct: "A",
      explanation: "\"<b>take</b> up a hobby\" (bắt đầu theo đuổi một sở thích) là cụm động từ cố định."
    },
    { id: 18, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "free", B: "waste", C: "empty", D: "full" },
      correct: "A",
      explanation: "\"a little <b>free</b> time\" (thời gian rảnh) là cụm từ cố định."
    },
    { id: 19, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "whose", B: "where", C: "who", D: "that" },
      correct: "D",
      explanation: "\"an activity <b>that</b> you like\" — đại từ quan hệ \"that\" thay cho \"activity\" (vật) làm tân ngữ."
    },
    { id: 20, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "enable", B: "let", C: "make", D: "help" },
      correct: "A",
      explanation: "\"<b>enable</b> sb to V\" (giúp/cho phép ai làm gì) là cấu trúc phù hợp với \"to make friends\" theo sau."
    },
    { id: 21, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "at", B: "with", C: "to", D: "from" },
      correct: "D",
      explanation: "\"coming <b>from</b> school\" — giới từ \"from\" chỉ nguồn gốc của áp lực."
    },
    { id: 22, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "pressure", B: "satisfaction", C: "difficulty", D: "boredom" },
      correct: "B",
      explanation: "\"bring <b>satisfaction</b> and pride\" (mang lại sự hài lòng và niềm tự hào) phù hợp với ý nghĩa tích cực của đoạn văn."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "hobbyDefinitionReading",
      prompt: "A hobby is something you do when you are busy with your work.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"A hobby is an activity... done during one's own time\" — làm trong thời gian rảnh, không phải khi bận việc."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "hobbyDefinitionReading",
      prompt: "Different people have different ways to spend their free time.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"people have many different ideas of how to spend their free time.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "hobbyDefinitionReading",
      prompt: "Everyone thinks that the same activity is interesting.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"An interesting thing to one person can be boring to another.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "hobbyDefinitionReading",
      prompt: "Age and personal interests can change the hobbies a person chooses.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"A person's hobbies depend on his age, character and personal interests.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "hobbyDefinitionReading",
      prompt: "According to the text, why do people have a hobby?",
      display: { A: "For pleasure or relaxation.", B: "To make more money.", C: "To study for school.", D: "To change their character." },
      correct: "A",
      explanation: "Bài đọc: \"A hobby is... undertaken for pleasure or relaxation.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "hobbyDefinitionReading",
      prompt: "Which of the following activities is NOT mentioned as a hobby in the text?",
      display: { A: "Gardening", B: "Cooking", C: "Travelling", D: "Camping" },
      correct: "A",
      explanation: "Bài đọc liệt kê \"reading, cooking, knitting, collecting, playing a musical instrument, photography... dancing, travelling, camping or sports\" — không nhắc đến \"gardening\", đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "My sister loves arranging flowers because she thinks they are _____________.",
      wordGiven: "COLOR", accepted: ["colorful", "colourful"], correct: "colorful / colourful",
      explanation: "Cần tính từ đứng sau \"are\". <b>color</b> (n) → <b>colorful/colourful</b> (adj, +ful, đầy màu sắc)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The new school music club has many talented _____________.",
      wordGiven: "MUSIC", accepted: ["musicians"], correct: "musicians",
      explanation: "Cần danh từ chỉ người số nhiều sau \"talented\". <b>music</b> (n) → <b>musician</b> (n, +ian) → <b>musicians</b> (số nhiều, nhạc sĩ)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "_____________, quite a few students do not have any hobbies due to busy school schedules.",
      wordGiven: "SURPRISE", accepted: ["surprisingly"], correct: "Surprisingly",
      explanation: "Cần trạng từ đứng đầu câu bổ nghĩa cho cả câu. <b>surprise</b> (n/v) → <b>surprisingly</b> (adv, +ly, đáng ngạc nhiên)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Doing gardening is an _____________ way to reduce stress after a hard exam.",
      wordGiven: "INTEREST", accepted: ["interesting"], correct: "interesting",
      explanation: "Cần tính từ đứng trước danh từ \"way\". <b>interest</b> (n/v) → <b>interesting</b> (adj, +ing, thú vị)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Playing board games helps children develop their social _____________.",
      wordGiven: "SKILFUL", accepted: ["skills"], correct: "skills",
      explanation: "Cần danh từ số nhiều sau tính từ \"social\". <b>skilful</b> (adj) → <b>skill</b> (n) → <b>skills</b> (số nhiều, kỹ năng)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The teacher gave the students _____________ to go to the school library to find books.",
      wordGiven: "PERMIT", accepted: ["permission"], correct: "permission",
      explanation: "Cần danh từ làm tân ngữ trực tiếp sau \"gave\". <b>permit</b> (v) → <b>permission</b> (n, sự cho phép)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "hobbyEntry",
      prompt: "Reading books and playing chess are my two __________________.",
      accepted: ["favorite hobbies", "favourite hobbies"], correct: "favorite hobbies",
      explanation: "Từ điển cho ví dụ \"What are your <b>favorite hobbies</b>?\" — khớp với ngữ cảnh liệt kê sở thích yêu thích."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "hobbyEntry",
      prompt: "Cycling is a __________________ because it keeps you active and helps you relax.",
      accepted: ["healthy hobby"], correct: "healthy hobby",
      explanation: "Từ điển cho ví dụ \"He needs to find a <b>healthy hobby</b> to reduce stress after school.\" — khớp với ngữ cảnh sở thích lành mạnh."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "My best friend doesn't like mountain climbing because he is afraid of heights.",
      starter: "My best friend finds",
      accepted: ["my best friend finds mountain climbing boring because he is afraid of heights", "my best friend finds mountain climbing dangerous because he is afraid of heights", "my best friend finds mountain climbing difficult because he is afraid of heights", "my best friend finds mountain climbing uninteresting because he is afraid of heights"],
      correct: "My best friend finds mountain climbing boring/dangerous/difficult because he is afraid of heights. (hoặc: ...finds mountain climbing uninteresting...)",
      explanation: "\"doesn't like\" (không thích) có thể viết lại bằng \"<b>finds + O + adj (boring/dangerous/difficult/uninteresting)</b>\", giữ nguyên nghĩa không thích.<br>→ <i>My best friend finds mountain climbing boring because he is afraid of heights.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Why don't we go swimming this afternoon?",
      starter: "How about",
      accepted: ["how about going swimming this afternoon"],
      correct: "How about going swimming this afternoon?",
      explanation: "\"Why don't we + V?\" (lời đề nghị) có thể viết lại bằng \"<b>How about + V-ing?</b>\", giữ nguyên nghĩa đề nghị.<br>→ <i>How about going swimming this afternoon?</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Alex is keen on taking photos. He takes photos every day.",
      starter: "Alex enjoys",
      accepted: ["alex enjoys taking photos every day"],
      correct: "Alex enjoys taking photos every day.",
      explanation: "\"be keen on + V-ing\" (thích, đam mê) có thể viết lại bằng \"<b>enjoy + V-ing</b>\", kết hợp hai câu thành một.<br>→ <i>Alex enjoys taking photos every day.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "I find doing gardening interesting.",
      starter: "My hobby",
      accepted: ["my hobby is doing gardening"],
      correct: "My hobby is doing gardening.",
      explanation: "\"find + O + adj\" (thấy điều gì đó thú vị) có thể viết lại bằng \"<b>My hobby is + V-ing</b>\", giữ nguyên ý nghĩa yêu thích hoạt động đó.<br>→ <i>My hobby is doing gardening.</i>"
    }
  ]
};
