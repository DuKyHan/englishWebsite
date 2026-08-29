const TEST = {
  id: "test14",
  grade: "Grade 9 — Global Success",
  unit: "Unit 1: Local community",
  title: "Grade 9 · Unit 1: Local community · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test14.html",
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
    { id: "VI", title: "Look at the dictionary entry of “attraction”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    localCommunityCloze: "<b>Local Community</b><br><br>In our local community, there are many people who come together to make life better. Neighbors often organize various events, such as fairs and (17) ________ markets, which help to bring everyone closer. These events not only support small businesses (18) ________ also create a sense of togetherness. The community center, which is located (19) ________ the heart of our town, offers a wide range of classes and activities. People who need help can visit the center, where they can find support and resources. (20) ________ residents volunteer their time to assist with different projects. For example, there are groups that help the elderly, tutor children, or (21) ________ charity drives. Schools, (22) ________ work closely with local groups, also plan special events that benefit the community. By caring for one another and working as a team, we create a more friendly and supportive place for everyone.",
    engagementReading: "Our local community plays a crucial role in shaping a vibrant and supportive environment for all residents. One of the most effective ways to strengthen community bonds is through active participation in local events and initiatives. For instance, neighborhood clean-up drives not only enhance the beauty of our surroundings but also foster a sense of pride and collaboration among residents. Additionally, community gardens offer a space where people can grow fresh produce, share gardening tips, and enjoy the benefits of working together. By supporting local businesses and attending town festivals, we contribute to the economic and cultural vitality of our area. Engaging with our community helps build lasting relationships, address local issues, and create a more cohesive and resilient neighborhood.",
    attractionEntry: {
      word: "attraction", ipa: "/əˈtrækʃn/", pos: "noun",
      def: "[C] a place that people visit for pleasure and interest, usually while they are on holiday",
      examples: [
        "The castle is a <b>major tourist attraction</b> in the area.",
        "The town's <b>main attraction</b> is its beautiful harbor.",
        "[U] a feeling of liking somebody, especially sexually — I felt a <b>strong attraction</b> to her the first time we met. — There is a <b>mutual attraction</b> between the two characters in the movie.",
        "[C, U] a feature or quality that makes something seem interesting or enjoyable — Being able to work from home is one of the <b>main attractions</b> of the job. — The <b>added attraction</b> of the hotel is its rooftop swimming pool."
      ]
    }
  },
  images: {
    signNoDogs: "assets/images/sign_no_dogs.jpg",
    signNoEnglishLesson: "assets/images/sign_no_english_lesson.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "idea", B: "dead", C: "thread", D: "bread" },
      correct: "A",
      explanation: "\"ea\" trong \"dead\" /ded/, \"thread\" /θred/, \"bread\" /bred/ đều phát âm là <b>/e/</b>. Riêng \"idea\" /aɪˈdɪə/ có \"ea\" phát âm là <b>/ɪə/</b> → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "language", B: "accident", C: "travel", D: "prepare" },
      correct: "D",
      explanation: "\"a\" trong \"language\" /ˈlæŋɡwɪdʒ/, \"accident\" /ˈæksɪdənt/, \"travel\" /ˈtrævl/ đều phát âm là <b>/æ/</b>. Riêng \"prepare\" /prɪˈpeər/ có \"a\" phát âm là <b>/eə/</b> → khác biệt, đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "suburb", B: "neighbour", C: "advice", D: "people" },
      correct: "C",
      explanation: "\"suburb\" /ˈsʌbɜːrb/, \"neighbour\" /ˈneɪbər/, \"people\" /ˈpiːpl/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"advice\" /ədˈvaɪs/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "absolute", B: "pollution", C: "permanent", D: "lacquerware" },
      correct: "B",
      explanation: "\"absolute\" /ˈæbsəluːt/, \"permanent\" /ˈpɜːrmənənt/, \"lacquerware\" /ˈlækərweər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"pollution\" /pəˈluːʃn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "A: \"Who is that man picking up the trash?\"",
      prompt: "B: \"He is a ______. He helps keep our neighborhood clean every day.\"",
      display: { A: "firefighter", B: "garbage collector", C: "police officer", D: "electrician" },
      correct: "B",
      explanation: "\"<b>garbage collector</b>\" (người thu gom rác) phù hợp với người \"picking up the trash\" và giữ khu phố sạch sẽ."
    },
    { id: 6, section: "I", type: "mcq",
      context: "A: \"Was the party successful last night?\"",
      prompt: "B: \"Yes! Before leaving, everyone didn't forget to ______ the host for a wonderful evening.\"",
      display: { A: "take care of", B: "remind", C: "pass down", D: "thank" },
      correct: "D",
      explanation: "\"<b>thank</b> the host\" (cảm ơn chủ nhà) phù hợp với việc mọi người không quên cảm ơn trước khi ra về."
    },
    { id: 7, section: "I", type: "mcq",
      context: "A: \"Is Tom coming to the community meeting today?\"",
      prompt: "B: \"No, he had to put ______ his trip because of a family emergency.\"",
      display: { A: "of", B: "off", C: "in", D: "up" },
      correct: "B",
      explanation: "\"put <b>off</b>\" (hoãn lại) là cụm động từ cố định, phù hợp với việc phải hoãn chuyến đi vì việc gia đình khẩn cấp."
    },
    { id: 8, section: "I", type: "mcq",
      context: "A: \"Our neighbors look confused. What's wrong?\"",
      prompt: "B: \"They wondered ______ to start the new neighborhood watch program.\"",
      display: { A: "what", B: "where", C: "how", D: "who" },
      correct: "C",
      explanation: "\"wondered <b>how</b> to start\" (không biết bắt đầu bằng cách nào) phù hợp với việc chưa rõ cách triển khai chương trình mới."
    },
    { id: 9, section: "I", type: "mcq",
      context: "A: \"Who is in charge of the charity event?\"",
      prompt: "B: \"I'm not sure. She asked ______ to organize it but no one volunteered yet.\"",
      display: { A: "where", B: "who", C: "which", D: "why" },
      correct: "B",
      explanation: "\"asked <b>who</b> to organize it\" (hỏi xem ai sẽ tổ chức) phù hợp với việc chưa ai xung phong (\"no one volunteered yet\")."
    },
    { id: 10, section: "I", type: "mcq",
      context: "A: \"Look at these beautiful vases!\"",
      prompt: "B: \"Yes, the ______ in this neighborhood is known for its wide variety of handmade crafts.\"",
      display: { A: "public transport", B: "sports club", C: "community outreach", D: "local business" },
      correct: "D",
      explanation: "\"the <b>local business</b> ... known for its wide variety of handmade crafts\" (cơ sở kinh doanh địa phương nổi tiếng với đồ thủ công) phù hợp với những chiếc bình gốm đẹp."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Tom: \"Could you please show me how to use this washing machine?\"",
      prompt: "Lan: \"__________\"",
      display: {
        A: "Yes, I could. Just turn on the fan.",
        B: "No, I couldn't wash these clothes.",
        C: "No, I don't have a washing machine.",
        D: "Sure. Just press this green button."
      },
      correct: "D",
      explanation: "\"<b>Sure. Just press this green button.</b>\" là câu trả lời trực tiếp và hợp lý cho yêu cầu hướng dẫn sử dụng máy giặt."
    },
    { id: 12, section: "I", type: "mcq",
      context: "A: \"Is there anything new at school this month?\"",
      prompt: "B: \"The school will ______ a new program to stop littering in the neighborhood.\"",
      display: { A: "break down", B: "cut down on", C: "set up", D: "look around" },
      correct: "C",
      explanation: "\"<b>set up</b> a new program\" (thành lập/triển khai một chương trình mới) phù hợp với việc nhà trường khởi động chương trình chống xả rác."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Chris: \"Have a wonderful holiday, Minh!\"",
      prompt: "Minh: \"______\"",
      display: {
        A: "What's happening?",
        B: "I've no idea.",
        C: "OK, we do, too.",
        D: "Thanks! The same to you!"
      },
      correct: "D",
      explanation: "\"<b>Thanks! The same to you!</b>\" là lời đáp phù hợp khi ai đó chúc mình một kỳ nghỉ tốt lành."
    },
    { id: 14, section: "I", type: "mcq",
      context: "A: \"How do you get on with your new neighbors?\"",
      prompt: "B: \"______\"",
      display: {
        A: "They are very friendly and helpful.",
        B: "We should protect the environment.",
        C: "I live in a small suburb.",
        D: "I often travel by bus."
      },
      correct: "A",
      explanation: "\"<b>They are very friendly and helpful.</b>\" trả lời trực tiếp câu hỏi về mối quan hệ với hàng xóm mới (\"get on with\" = hòa hợp với)."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoDogs",
      prompt: "What does the sign say?",
      display: {
        A: "Pets are not allowed to enter or be in this area.",
        B: "You may bring dogs here if they are on a leash.",
        C: "Only small pets are allowed in this area.",
        D: "Dogs are welcome everywhere and can go anywhere."
      },
      correct: "A",
      explanation: "Biển tròn đỏ có hình chú chó bị gạch chéo → \"<b>Pets are not allowed to enter or be in this area.</b>\" (Cấm vật nuôi vào khu vực này), đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signNoEnglishLesson",
      prompt: "What does the notice say?",
      display: {
        A: "This lesson is not happening today.",
        B: "This lesson is in a different place today.",
        C: "This lesson begins a bit later today.",
        D: "This lesson is only for class 10A."
      },
      correct: "A",
      explanation: "Biển ghi \"NOTICE: CLASS 10A — NO ENGLISH LESSON TODAY — TEACHER IS ILL.\" → tiết học hôm nay không diễn ra vì giáo viên bị ốm, đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "localCommunityCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "local", B: "distance", C: "remote", D: "international" },
      correct: "A",
      explanation: "\"fairs and <b>local</b> markets\" (hội chợ và chợ địa phương) phù hợp với ngữ cảnh các sự kiện do hàng xóm trong cộng đồng tổ chức."
    },
    { id: 18, section: "III", type: "mcq", passage: "localCommunityCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "or", B: "but", C: "and", D: "so" },
      correct: "B",
      explanation: "\"not only support small businesses <b>but</b> also create...\" — cấu trúc cố định \"not only ... but also ...\"."
    },
    { id: 19, section: "III", type: "mcq", passage: "localCommunityCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "on", B: "at", C: "in", D: "by" },
      correct: "C",
      explanation: "\"located <b>in</b> the heart of our town\" — cụm cố định \"in the heart of\" (ở trung tâm/giữa lòng)."
    },
    { id: 20, section: "III", type: "mcq", passage: "localCommunityCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "Much", B: "Many", C: "Every", D: "Another" },
      correct: "B",
      explanation: "\"<b>Many</b> residents volunteer\" — \"residents\" là danh từ đếm được số nhiều nên dùng \"Many\", không dùng \"Much\"."
    },
    { id: 21, section: "III", type: "mcq", passage: "localCommunityCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "cancel", B: "ignore", C: "avoid", D: "organize" },
      correct: "D",
      explanation: "\"tutor children, or <b>organize</b> charity drives\" (tổ chức các đợt quyên góp từ thiện) phù hợp với các hoạt động tình nguyện được liệt kê."
    },
    { id: 22, section: "III", type: "mcq", passage: "localCommunityCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "where", B: "who", C: "which", D: "whose" },
      correct: "C",
      explanation: "\"Schools, <b>which</b> work closely with local groups,...\" — đại từ quan hệ \"which\" thay cho danh từ chỉ vật \"Schools\" trong mệnh đề quan hệ không xác định."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "engagementReading",
      prompt: "Participating in local events can help make community relationships stronger.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"active participation in local events and initiatives\" giúp \"strengthen community bonds\" (tăng cường mối liên kết cộng đồng)."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "engagementReading",
      prompt: "Neighborhood clean-up drives only focus on improving the look of the area.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"clean-up drives not only enhance the beauty of our surroundings <b>but also foster a sense of pride and collaboration</b>\" — không chỉ về vẻ ngoài."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "engagementReading",
      prompt: "People can share their gardening knowledge with others in community gardens.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"community gardens offer a space where people can grow fresh produce, <b>share gardening tips</b>...\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "engagementReading",
      prompt: "Buying goods from local businesses harms the economic vitality of the neighborhood.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"By supporting local businesses ..., we <b>contribute to the economic</b> and cultural vitality of our area.\" — tác động tích cực, không gây hại."
    },
    { id: 27, section: "IV", type: "mcq", passage: "engagementReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The benefits of growing fresh vegetables in public areas.",
        B: "The importance of active participation in improving the local community.",
        C: "The negative effects of local businesses on town festivals.",
        D: "The history of neighborhood clean-up drives and community events."
      },
      correct: "B",
      explanation: "Toàn bài nhấn mạnh việc \"active participation in local events and initiatives\" giúp xây dựng cộng đồng vững mạnh hơn → đáp án B bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "engagementReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Supporting local businesses helps the area grow economically.",
        B: "Active participation helps people solve local problems together.",
        C: "Town festivals are the only way to build a resilient neighborhood.",
        D: "Cleaning the neighborhood helps residents feel proud of their surroundings."
      },
      correct: "C",
      explanation: "Bài đọc chỉ nêu town festivals là MỘT trong nhiều cách đóng góp (bên cạnh clean-up drives, community gardens...), không phải \"the only way\" (cách duy nhất) → câu C SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The air in the city is bad because of severe ______________.",
      wordGiven: "pollute", accepted: ["pollution"], correct: "pollution",
      explanation: "Cần danh từ đứng sau tính từ \"severe\". <b>pollute</b> (v) → <b>pollution</b> (n, +ion): ô nhiễm."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "We are looking for a ______________ solution to the trash problem.",
      wordGiven: "permanence", accepted: ["permanent"], correct: "permanent",
      explanation: "Cần tính từ đứng trước danh từ \"solution\". <b>permanence</b> (n) → <b>permanent</b> (adj): lâu dài, vĩnh viễn."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The artisanal ______________ of this village is famous nationwide.",
      wordGiven: "lacquer", accepted: ["lacquerware"], correct: "lacquerware",
      explanation: "Cần danh từ làm chủ ngữ của câu. <b>lacquer</b> (n) → <b>lacquerware</b> (n, +ware): đồ sơn mài."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The local authorities gave ______________ to hold the festival.",
      wordGiven: "permit", accepted: ["permission"], correct: "permission",
      explanation: "Cần danh từ làm tân ngữ của \"gave\". <b>permit</b> (v) → <b>permission</b> (n): sự cho phép."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "The new community center is ______________ decorated.",
      wordGiven: "beauty", accepted: ["beautifully"], correct: "beautifully",
      explanation: "Cần trạng từ bổ nghĩa cho động từ dạng bị động \"decorated\". <b>beauty</b> (n) → <b>beautifully</b> (adv, +ful+ly): một cách đẹp đẽ."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "It was ______________ that he decided to leave the suburb.",
      wordGiven: "advice", accepted: ["advisable"], correct: "advisable",
      explanation: "Cần tính từ đứng sau \"was\" trong cấu trúc \"It was + adj + that...\". <b>advice</b> (n) → <b>advisable</b> (adj, +able): nên làm, khôn ngoan."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "attractionEntry",
      prompt: "The Eiffel Tower is a ____________________ in Paris, welcoming millions of visitors every year.",
      accepted: ["major tourist attraction"], correct: "major tourist attraction",
      explanation: "Từ điển cho ví dụ \"The castle is a <b>major tourist attraction</b> in the area.\" — khớp với ngữ cảnh tháp Eiffel đón hàng triệu du khách."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "attractionEntry",
      prompt: "They fell in love quickly because there was a ____________________ between them.",
      accepted: ["strong attraction", "mutual attraction"], correct: "strong attraction / mutual attraction",
      explanation: "Từ điển cho ví dụ \"I felt a <b>strong attraction</b> to her...\" và \"There is a <b>mutual attraction</b> between the two characters.\" — cả hai cụm đều phù hợp với ngữ cảnh hai người nhanh chóng yêu nhau."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "I don't know how I can get to the swimming pool.",
      starter: "I don't know",
      accepted: ["i don't know how to get to the swimming pool"],
      correct: "I don't know how to get to the swimming pool.",
      explanation: "\"wh-word + can + V\" có thể rút gọn thành \"<b>wh-word + to-V</b>\" khi chủ ngữ hai mệnh đề giống nhau.<br>→ <i>I don't know how to get to the swimming pool.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Could you tell me who I should ask for advice?",
      starter: "Could you tell me",
      accepted: ["could you tell me who to ask for advice"],
      correct: "Could you tell me who to ask for advice?",
      explanation: "\"wh-word + should + V\" có thể rút gọn thành \"<b>wh-word + to-V</b>\" khi chủ ngữ hai mệnh đề giống nhau.<br>→ <i>Could you tell me who to ask for advice?</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "She has a good relationship with her classmates.",
      starter: "She",
      accepted: ["she gets on well with her classmates"],
      correct: "She gets on well with her classmates.",
      explanation: "\"have a good relationship with sb\" (có mối quan hệ tốt với ai) có thể diễn đạt lại bằng cụm động từ \"<b>get on well with sb</b>\" (hòa hợp với ai) — cùng nghĩa.<br>→ <i>She gets on well with her classmates.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "They are wondering what they should buy for their grandmother.",
      starter: "They are wondering",
      accepted: ["they are wondering what to buy for their grandmother"],
      correct: "They are wondering what to buy for their grandmother.",
      explanation: "\"wh-word + should + V\" có thể rút gọn thành \"<b>wh-word + to-V</b>\" khi chủ ngữ hai mệnh đề giống nhau.<br>→ <i>They are wondering what to buy for their grandmother.</i>"
    }
  ]
};
