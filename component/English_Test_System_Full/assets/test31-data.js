const TEST = {
  id: "test31",
  grade: "Grade 6 — Global Success",
  unit: "Unit 4: My neighbourhood",
  title: "Grade 6 · Unit 4: My neighbourhood · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test31.html",
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
    { id: "VI", title: "Look at the dictionary entry of “peaceful”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    greendaleCloze: "I live in a quiet town named Greendale. There are around 21,000 people here. I enjoy living here because it's peaceful and the streets are wide and (17) ________. The town is clean and green because people always take good (18) ________ of their surroundings. The air is fresh, and the neighbors are kind. Everyone knows (19) ________ other and often stops to say hello. Of course, there are (20) ________ things I don't enjoy. For example, there isn't much public transport, so getting to the city can be difficult. Another thing is that people sometimes say bad things about each other, (21) ________ can be a bit annoying. But overall, I still (22) ________ the quiet and friendly life here.",
    hilltownReading: "Hi Friends! My name's Sandra and I live in Hilltown. It is a small town in the south of England. About 9,000 people live here. There are many shops in the town and there are three supermarkets. You can buy everything you need in the town. There are two banks, a post office, a police station and a library, too. You can find a big market where you can buy fresh fruit, vegetables, meat and dairy products. I like going to the market with my mum. There is a park in the town centre. In the park children can play because there is a playground. In our town you can find some restaurants and cafés. My favorite café is Icecave. It's in Park Street and the ice cream is fantastic here! There are three elementary schools and two high schools in Hilltown. My school is in Mill Street. Next to our school there is a sports centre. Every Wednesday afternoon, we play badminton. I like living in Hilltown because it is a calm, neat place and people are friendly.",
    peacefulEntry: {
      word: "peaceful", ipa: "/ˈpiːsfl/", pos: "adjective",
      def: "1. quiet and calm; not worried or disturbed by noise. 2. not involving war, fighting, or violence.",
      examples: [
        "The countryside is so <b>peaceful and quiet</b>.",
        "I hope you have a <b>peaceful night's</b> sleep.",
        "They are looking for a <b>peaceful solution</b> to the problem.",
        "The activists held a <b>peaceful protest</b> outside the city hall."
      ]
    }
  },
  images: {
    signChildrenCrossingU4: "assets/images/sign_children_crossing_u4.jpg",
    noticeMeetClassroom: "assets/images/notice_meet_classroom.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "dislike", B: "dirty", C: "village", D: "office" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"i\". \"dislike\" /dɪsˈlaɪk/, \"village\" /ˈvɪlɪdʒ/, \"office\" /ˈɒfɪs/ đều có \"i\" phát âm là <b>/ɪ/</b>. Riêng \"dirty\" /ˈdɜːrti/ có \"i\" phát âm là <b>/ɜːr/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "sandy", B: "fast", C: "seafood", D: "gyms" },
      correct: "D",
      explanation: "Phần gạch chân là chữ cái \"s\". \"sandy\" /ˈsændi/, \"fast\" /fæst/, \"seafood\" /ˈsiːfuːd/ đều có \"s\" phát âm là <b>/s/</b>. Riêng \"gyms\" /dʒɪmz/ có \"s\" (đuôi số nhiều) phát âm là <b>/z/</b> (sau âm hữu thanh \"m\") → khác biệt, đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "building", B: "traffic", C: "arrive", D: "suburb" },
      correct: "C",
      explanation: "\"building\" /ˈbɪldɪŋ/, \"traffic\" /ˈtræfɪk/, \"suburb\" /ˈsʌbɜːrb/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"arrive\" /əˈraɪv/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "pagoda", B: "museum", C: "gallery", D: "exciting" },
      correct: "C",
      explanation: "\"pagoda\" /pəˈɡoʊdə/, \"museum\" /mjuˈziːəm/, \"exciting\" /ɪkˈsaɪtɪŋ/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"gallery\" /ˈɡæləri/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Lan: \"Can you tell us the __________ to Hai Ba Trung Street?\"",
      prompt: "Nam: \"Sure. Go straight ahead and turn left at the first corner.\"",
      display: { A: "way", B: "road", C: "instruction", D: "street" },
      correct: "A",
      explanation: "\"the <b>way</b> to + địa điểm\" là cụm từ cố định dùng để hỏi đường."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Tom: \"There are too many vehicles in this town during the day.\"",
      prompt: "Jerry: \"You're right. It's always very __________ and crowded.\"",
      display: { A: "noisy", B: "peaceful", C: "fantastic", D: "memorial" },
      correct: "A",
      explanation: "Nhiều phương tiện giao thông thường gây ra tiếng ồn → \"<b>noisy</b>\" (ồn ào) phù hợp và đi cùng \"crowded\" (đông đúc)."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Henry: \"Do you often visit your grandpa at weekends?\"",
      prompt: "Ben: \"Yes, I usually stay with him __________ Saturdays and Sundays.\"",
      display: { A: "on", B: "at", C: "in", D: "with" },
      correct: "A",
      explanation: "Giới từ \"<b>on</b>\" dùng với ngày cụ thể/thứ trong tuần: \"on Saturdays and Sundays\"."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Tim: \"How many bedrooms __________ there in your new house?\"",
      prompt: "Amy: \"There are three, and they are all very bright.\"",
      display: { A: "are", B: "is", C: "to be", D: "be" },
      correct: "A",
      explanation: "Câu hỏi với \"How many + N (số nhiều)\" đi với \"<b>are</b> there\"."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Son: \"Look at those apartments! A city house is __________ than a country house.\"",
      prompt: "Father: \"Yes, but it is also much more expensive, son.\"",
      display: { A: "more moderner", B: "most modern", C: "modern", D: "more modern" },
      correct: "D",
      explanation: "Sau \"than\" cần dạng so sánh hơn của tính từ dài (2 âm tiết trở lên): \"<b>more modern</b> than\"."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Tourist: \"Excuse me, where can I buy some stamps or send these letters?\"",
      prompt: "Local: \"There is a __________ just down this road, next to the bank.\"",
      display: { A: "school", B: "library", C: "cinema", D: "post office" },
      correct: "D",
      explanation: "Nơi bán tem và gửi thư là \"<b>post office</b>\" (bưu điện)."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Mary: \"Are there __________ lakes in your hometown?\"",
      prompt: "Jane: \"Yes, there are three large ones where people can go fishing.\"",
      display: { A: "a lot", B: "lots", C: "much", D: "many" },
      correct: "D",
      explanation: "\"lakes\" là danh từ đếm được số nhiều; trong câu hỏi dùng \"<b>many</b>\" đứng trực tiếp trước danh từ (không cần \"of\")."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Lan: \"Why don't we take a trip to my hometown this weekend?\"",
      prompt: "Nam: \"__________! I really want to see the countryside.\"",
      display: { A: "Yes, we do", B: "You're welcome", C: "That's a good idea", D: "Not at all" },
      correct: "C",
      explanation: "Phản hồi đồng tình với lời đề nghị \"Why don't we...?\" là \"<b>That's a good idea!</b>\""
    },
    { id: 13, section: "I", type: "mcq",
      context: "Sandra: \"I love living in Hilltown because it is a very calm and neat place.\"",
      prompt: "Peter: \"__________! The people there are also incredibly friendly.\"",
      display: { A: "I don't think so", B: "The same to you", C: "I completely agree", D: "It doesn't matter" },
      correct: "C",
      explanation: "\"<b>I completely agree!</b>\" thể hiện sự đồng tình hoàn toàn với ý kiến của Sandra."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Sara: \"Can you meet me at 2 pm today? I'll be waiting in Classroom C.\"",
      prompt: "Jim: \"__________! See you there.\"",
      display: { A: "I'd love to, but", B: "Sorry, I can't", C: "Sure, I'll be there", D: "Why not" },
      correct: "C",
      explanation: "\"<b>Sure, I'll be there!</b>\" là lời đồng ý rõ ràng, phù hợp với \"See you there\" tiếp theo."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "signChildrenCrossingU4",
      prompt: "What does this sign tell you to do when driving through a residential area?",
      display: {
        A: "Children must walk slowly on this special street.",
        B: "You must drive slowly because children might be crossing.",
        C: "Vehicles are completely banned from entering this area.",
        D: "You must park your car near the playground."
      },
      correct: "B",
      explanation: "Biển báo tam giác vàng có hình trẻ em đi bộ qua đường → cảnh báo người lái xe đi chậm lại vì có thể có trẻ em băng qua đường, đáp án B."
    },
    { id: 16, section: "II", type: "mcq", image: "noticeMeetClassroom",
      prompt: "What does this short notice from Sara mean?",
      display: {
        A: "Classroom C is closed for the rest of the day.",
        B: "Jim is currently teaching a lesson in Classroom C.",
        C: "Sara wants Jim to come to Classroom C to meet her this afternoon.",
        D: "Sara's class always starts exactly at 2 pm."
      },
      correct: "C",
      explanation: "Tờ giấy nhắn: \"Can you meet me at 2 pm today? I'll be in Classroom C at that time.\" → Sara muốn Jim đến phòng C gặp cô vào lúc 2 giờ chiều, đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "greendaleCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "safe", B: "safety", C: "secure", D: "dangerously" },
      correct: "A",
      explanation: "\"the streets are wide and <b>safe</b>\" — tính từ \"safe\" song song với \"wide\", cùng bổ nghĩa cho \"streets\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "greendaleCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "care", B: "mind", C: "look", D: "attention" },
      correct: "A",
      explanation: "\"take good <b>care</b> of\" là cụm động từ cố định nghĩa \"chăm sóc tốt cho\"."
    },
    { id: 19, section: "III", type: "mcq", passage: "greendaleCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "every", B: "one", C: "each", D: "an" },
      correct: "C",
      explanation: "\"knows <b>each</b> other\" là cụm cố định nghĩa \"biết nhau\"."
    },
    { id: 20, section: "III", type: "mcq", passage: "greendaleCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "some", B: "little", C: "any", D: "much" },
      correct: "A",
      explanation: "\"there are <b>some</b> things\" — câu khẳng định dùng \"some\" trước danh từ đếm được số nhiều."
    },
    { id: 21, section: "III", type: "mcq", passage: "greendaleCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "which", B: "what", C: "where", D: "who" },
      correct: "A",
      explanation: "\"..., <b>which</b> can be a bit annoying\" — đại từ quan hệ \"which\" thay thế cho cả mệnh đề đứng trước."
    },
    { id: 22, section: "III", type: "mcq", passage: "greendaleCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "wish", B: "prefer", C: "love", D: "dislike" },
      correct: "C",
      explanation: "\"I still <b>love</b> the quiet and friendly life here\" — phù hợp với thái độ tích cực xuyên suốt đoạn văn."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "hilltownReading",
      prompt: "Hilltown is a very large city in the north of England with over 90,000 people.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"It is a small town in the south of England. About 9,000 people live here.\" — thị trấn nhỏ ở miền Nam nước Anh, khoảng 9.000 người, không phải thành phố lớn ở miền Bắc."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "hilltownReading",
      prompt: "Sandra enjoys going to the big market with her mother.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"I like going to the market with my mum.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "hilltownReading",
      prompt: "Sandra's favorite café, Icecave, is located inside the central park.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"My favorite café is Icecave. It's in Park Street\" — quán cà phê ở phố Park Street, không phải trong công viên trung tâm."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "hilltownReading",
      prompt: "There are five schools in total in Hilltown.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"There are three elementary schools and two high schools\" — tổng cộng 3 + 2 = 5 trường."
    },
    { id: 27, section: "IV", type: "mcq", passage: "hilltownReading",
      prompt: "What do Sandra and her schoolmates do every Wednesday afternoon?",
      display: { A: "They play badminton at the sports centre.", B: "They go to the library to read books.", C: "They buy fresh fruit and ice cream.", D: "They clean the playground in the park." },
      correct: "A",
      explanation: "Bài đọc: \"Every Wednesday afternoon, we play badminton.\" (tại trung tâm thể thao cạnh trường) → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "hilltownReading",
      prompt: "Why does Sandra like living in Hilltown?",
      display: { A: "Because it is a quiet, clean place and the people are nice.", B: "Because it has many big supermarkets and banks.", C: "Because her school is located next to her favorite café.", D: "Because she can play badminton every day of the week." },
      correct: "A",
      explanation: "Bài đọc: \"I like living in Hilltown because it is a calm, neat place and people are friendly.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Greendale is a very _____________ town, so many elderly people love retiring there.",
      wordGiven: "PEACE", accepted: ["peaceful"], correct: "peaceful",
      explanation: "Cần tính từ đứng trước danh từ \"town\". <b>peace</b> (n) → <b>peaceful</b> (adj, +ful, yên bình)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The streets near the market are always _____________ with shoppers on weekends.",
      wordGiven: "CROWD", accepted: ["crowded"], correct: "crowded",
      explanation: "Cần tính từ sau \"are always\". <b>crowd</b> (n/v) → <b>crowded</b> (adj, +ed, đông đúc)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The local museum is one of the most famous historic _____________ in the region.",
      wordGiven: "ATTRACT", accepted: ["attractions"], correct: "attractions",
      explanation: "Cần danh từ số nhiều sau tính từ \"historic\". <b>attract</b> (v) → <b>attraction</b> (n) → <b>attractions</b> (số nhiều, điểm thu hút)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The city center looks very modern and _____________ with new tall buildings.",
      wordGiven: "FANTASY", accepted: ["fantastic"], correct: "fantastic",
      explanation: "Cần tính từ song song với \"modern\". <b>fantasy</b> (n) → <b>fantastic</b> (adj, tuyệt vời)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "The loud noise from the nearby factory is extremely _____________ to the residents.",
      wordGiven: "ANNOY", accepted: ["annoying"], correct: "annoying",
      explanation: "Cần tính từ sau \"extremely\". <b>annoy</b> (v) → <b>annoying</b> (adj, +ing, gây khó chịu)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "We should help our neighbors clean the streets to keep our _____________ green.",
      wordGiven: "NEIGHBOR", accepted: ["neighborhood"], correct: "neighborhood",
      explanation: "Cần danh từ sau tính từ sở hữu \"our\". <b>neighbor</b> (n) → <b>neighborhood</b> (n, +hood, khu phố/khu dân cư)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "peacefulEntry",
      prompt: "After a long and stressful day at work, she just wanted to go home and enjoy a __________________ evening.",
      accepted: ["peaceful and quiet"], correct: "peaceful and quiet",
      explanation: "Từ điển cho ví dụ \"The countryside is so <b>peaceful and quiet</b>.\" — khớp với ngữ cảnh muốn thư giãn sau một ngày căng thẳng."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "peacefulEntry",
      prompt: "The leaders of both countries met yesterday to talk about finding a __________________ to the conflict.",
      accepted: ["peaceful solution"], correct: "peaceful solution",
      explanation: "Từ điển cho ví dụ \"They are looking for a <b>peaceful solution</b> to the problem.\" — khớp với ngữ cảnh tìm cách giải quyết xung đột."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "The last exam was easier than this one.",
      starter: "This exam was",
      accepted: ["this exam was harder than the last one", "this exam was not as easy as the last one"],
      correct: "This exam was harder than the last one.",
      explanation: "So sánh hơn \"A + is easier + than + B\" có thể đảo chủ ngữ thành \"<b>B + is harder + than + A</b>\" hoặc phủ định ngang bằng \"<b>B + is not as easy as + A</b>\", giữ nguyên nghĩa.<br>→ <i>This exam was harder than the last one.</i> (hoặc: <i>This exam was not as easy as the last one.</i>)"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "\"Where is the way to Ben Thanh Market?\" the tourist asked.",
      starter: "The tourist asked, \"Can you tell",
      accepted: ["the tourist asked, \"can you tell me the way to ben thanh market?\""],
      correct: "The tourist asked, \"Can you tell me the way to Ben Thanh Market?\"",
      explanation: "Câu hỏi trực tiếp \"Where is...?\" có thể viết lại lịch sự hơn bằng \"<b>Can you tell me the way to...?</b>\", giữ nguyên nghĩa hỏi đường.<br>→ <i>The tourist asked, \"Can you tell me the way to Ben Thanh Market?\"</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Those historic buildings are taller than these modern houses.",
      starter: "These modern houses are not",
      accepted: ["these modern houses are not as tall as those historic buildings"],
      correct: "These modern houses are not as tall as those historic buildings.",
      explanation: "So sánh hơn \"A + is taller + than + B\" có nghĩa tương đương với so sánh ngang bằng phủ định \"<b>B + is not as tall as + A</b>\".<br>→ <i>These modern houses are not as tall as those historic buildings.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "There are many new shops near here, so the streets are very busy during the day.",
      starter: "Because there are",
      accepted: ["because there are many new shops near here, the streets are very busy during the day"],
      correct: "Because there are many new shops near here, the streets are very busy during the day.",
      explanation: "Câu với \"..., so + kết quả\" có thể viết lại bằng \"<b>Because + nguyên nhân, + kết quả</b>\", đảo trật tự nhưng giữ nguyên nghĩa.<br>→ <i>Because there are many new shops near here, the streets are very busy during the day.</i>"
    }
  ]
};
