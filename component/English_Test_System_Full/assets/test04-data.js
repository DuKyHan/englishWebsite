const TEST = {
  id: "test04",
  grade: "Grade 8 — Global Success",
  unit: "Unit 5: Our customs and traditions",
  title: "Grade 8 · Unit 5: Our customs and traditions · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test04.html",
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
    { id: "VI", title: "Look at the dictionary entry of “reunion”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    weddingCloze: "Wedding custom in Viet Nam is quite complicated. Before an official wedding, a ceremony of engagement must be held first. In Vietnamese tradition, an engagement ceremony is an official (17) ________ for families of fiancé and fiancée to mark their relationship and to arrange the wedding. Each family needs to (18) ________ a representative who is a family member having a happy life and a high-ranking position in the family. On the day of the engagement, the representatives of the two families will have some announcements about the wedding and (19) ________ gifts. The time of the wedding is chosen suitably based (20) ________ the lunar calendar. Gifts (21) ________ are put in trays are prepared by the family of fiancé a few days before the engagement ceremony. The number of trays must be an odd number. In Vietnamese habits, odd numbers are thought to (22) ________ luck to the couple. In the trays, there are betel leaves, areca nut fruits, wine, tea, husband-wife cakes, and sticky rice. On the wedding day, the couple has to stay apart to avoid unlucky things. The wedding ceremony starts in front of the ancestor altar. The master of the wedding ceremony will declare the couple becomes a new family.",
    somethingOldReading: "Although there are various wedding styles in America, most weddings still follow certain traditions. One of those is an old saying that dates back to 19th century England about what a bride should wear or carry: \"Something old, something new, something borrowed, something blue.\"<br><br>A bride wears something old to remind her of her family and the past. Some brides wear their mother's wedding dress or a piece of her jewelry. Something new means good luck and hope for a happy future with her new husband. Again, this item may be the dress, but often it is a pair of new shoes. Something borrowed such as a friend's handkerchief or a married friend's bridal veil means the bride has friends and family who are willing to help her. Something blue is a symbol of trust and faith between the couple. These days, some brides are creative with this item by painting their fingernails a light blue color or wearing a garter on their leg. Another tradition says that the groom should take the garter after the ceremony and throw it to the single men. The man who catches it will be the next one to get married.",
    reunionEntry: {
      word: "reunion", ipa: "/ˌriːˈjuːniən/", pos: "noun",
      def: "a social occasion or party for a group of people who have not seen each other for a long time",
      examples: [
        "We are having a <b>family reunion</b> next week to celebrate grandmother's 80th birthday.",
        "The school is organizing a <b>high school reunion</b> for the class of 2015.",
        "It was an emotional <b>tearful reunion</b> between the mother and her long-lost son.",
        "They <b>hold a reunion</b> every five years to keep in touch with old colleagues."
      ]
    }
  },
  images: {
    signSlowDownSchool: "assets/images/sign_slow_down_school.jpg",
    signRestaurantDeposit: "assets/images/sign_restaurant_deposit.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "basic", B: "design", C: "physical", D: "preserve" },
      correct: "A",
      explanation: "Chữ \"s\" trong \"design\" /dɪˈzaɪn/, \"physical\" /ˈfɪzɪkl/, \"preserve\" /prɪˈzɜːrv/ đều phát âm là <b>/z/</b>. Riêng \"basic\" /ˈbeɪsɪk/ có \"s\" phát âm là <b>/s/</b> → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "miraculous", B: "shake", C: "occupation", D: "occasion" },
      correct: "A",
      explanation: "Chữ \"a\" trong \"shake\" /ʃeɪk/, \"occupation\" /ˌɒkjuˈpeɪʃn/, \"occasion\" /əˈkeɪʒn/ đều phát âm là <b>/eɪ/</b>. Riêng \"miraculous\" /məˈrækjələs/ có \"a\" phát âm là <b>/æ/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "holiday", B: "festival", C: "addition", D: "offering" },
      correct: "C",
      explanation: "\"holiday\" /ˈhɑːlədeɪ/, \"festival\" /ˈfestɪvl/, \"offering\" /ˈɔːfərɪŋ/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"addition\" /əˈdɪʃn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "practice", B: "prepare", C: "welcome", D: "visit" },
      correct: "B",
      explanation: "\"practice\" /ˈpræktɪs/, \"welcome\" /ˈwelkəm/, \"visit\" /ˈvɪzɪt/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"prepare\" /prɪˈper/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Nick: \"What are the people in Hanoi doing by the river?\"",
      prompt: "Nam: \"They ______ carps into the water to give Ong Cong Ong Tao a ride to Heaven.\"",
      display: { A: "release", B: "have released", C: "released", D: "are releasing" },
      correct: "D",
      explanation: "Hành động đang diễn ra ngay tại thời điểm nói (Nick đang hỏi \"what are the people... doing\") → dùng <b>thì hiện tại tiếp diễn</b>: <b>are releasing</b>."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Tom: \"Look! The acrobats are performing an amazing lion dance.\"",
      prompt: "Mary: \"Wow! Their performance is greeted ______ loud applause from the crowd.\"",
      display: { A: "by", B: "with", C: "in", D: "at" },
      correct: "B",
      explanation: "\"be greeted <b>with</b> applause\" (được đón nhận bằng những tràng vỗ tay) là cụm giới từ cố định."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Anna: \"How do people in Thailand say hello to each other?\"",
      prompt: "Jane: \"They use the \"wai\", which is the traditional ______ of Thai people.\"",
      display: { A: "greeting", B: "routine", C: "goodbye", D: "habit" },
      correct: "A",
      explanation: "\"wai\" là một cử chỉ chào hỏi (chắp tay cúi đầu) của người Thái → \"the traditional <b>greeting</b>\" (lời/cử chỉ chào hỏi truyền thống)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Lucas: \"Do you know how two Maori people meet in New Zealand?\"",
      prompt: "Elena: \"Yes, they press or ______ each other's noses as a unique custom.\"",
      display: { A: "take", B: "touch", C: "feel", D: "kiss" },
      correct: "B",
      explanation: "\"press or <b>touch</b> noses\" mô tả nghi thức chào \"hongi\" của người Maori — ép/chạm mũi vào nhau."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Minh: \"Should I speak loudly when I visit a pagoda or a public place?\"",
      prompt: "John: \"No, you ______ talk loudly in public because it is considered impolite.\"",
      display: { A: "don't have to", B: "had better", C: "shouldn't", D: "ought to" },
      correct: "C",
      explanation: "Câu trả lời mang tính khuyên KHÔNG nên làm gì → cần một <b>động từ khuyết thiếu ở dạng phủ định mang nghĩa \"không nên\"</b>: <b>shouldn't</b>. \"had better\"/\"ought to\" ở dạng khẳng định (không có \"not\") sẽ mang nghĩa NÊN làm, ngược với ý câu."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Clara: \"Can I fly to London this afternoon to attend the cultural festival?\"",
      prompt: "Agent: \"You ______ fly this afternoon if you don't mind changing planes in Paris.\"",
      display: { A: "have to", B: "must", C: "ought to", D: "can" },
      correct: "D",
      explanation: "Nhân viên đang đưa ra một <b>khả năng/lựa chọn</b> (nếu không phiền đổi chuyến ở Paris thì CÓ THỂ bay chiều nay) chứ không phải bắt buộc → dùng <b>can</b>."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Nick: \"In my opinion, a tradition is a special belief or custom passed down from generation to generation.\"",
      prompt: "Teacher: \"______! Now, can you give me an example of a local tradition?\"",
      display: { A: "Yes, spot on", B: "Yes, I do", C: "You're kidding", D: "Sound lovely" },
      correct: "A",
      explanation: "\"<b>Yes, spot on!</b>\" nghĩa là \"Đúng, chính xác!\" — dùng để khen ngợi một nhận định/câu trả lời hoàn toàn chính xác, rất hợp khi giáo viên xác nhận định nghĩa của học sinh là đúng."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Peter: \"Is Paris beautiful when the sun goes down?\"",
      prompt: "Du: \"Yes, Paris is absolutely splendid by ______ night.\"",
      display: { A: "the", B: "Ø (no article)", C: "an", D: "a" },
      correct: "B",
      explanation: "\"by night\" (về đêm) là cụm cố định <b>không dùng mạo từ</b>, giống như \"by day\"."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Nha: \"Have a wonderful time at the traditional Mid-Autumn festival, Lucy!\"",
      prompt: "Lucy: \"______\"",
      display: { A: "I've no idea.", B: "OK, we do, too.", C: "What's happening?", D: "Thanks! The same to you!" },
      correct: "D",
      explanation: "\"<b>Thanks! The same to you!</b>\" là cách đáp lại phù hợp khi ai đó chúc mình điều tốt đẹp — cảm ơn và chúc lại."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Hoa: \"___________________________\"",
      prompt: "Mai: \"Yes, the groom will take the garter after the ceremony and throw it to the single men.\"",
      display: {
        A: "Why do American brides paint their fingernails a light blue color?",
        B: "Do single men have to prepare any special gifts for the wedding?",
        C: "How complicated is a traditional wedding custom in Vietnam?",
        D: "Is there any interesting wedding tradition for the groom in America?"
      },
      correct: "D",
      explanation: "Câu trả lời của Mai nói về một <b>phong tục của chú rể</b> ở đám cưới Mỹ (ném nịt tất) → câu hỏi phù hợp nhất là hỏi về phong tục thú vị dành cho chú rể ở Mỹ, đáp án D."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signSlowDownSchool",
      prompt: "What does this sign tell you?",
      display: {
        A: "You can park very close to the school entrance.",
        B: "You can park right in front of the school gate if you drive slowly.",
        C: "You must park inside the school yard only.",
        D: "You must park at least 25 metres away from the school entrance."
      },
      correct: "D",
      explanation: "Biển báo ghi \"NO PARKING WITHIN 25m\" (Không đỗ xe trong phạm vi 25m) tính từ cổng trường → phải đỗ xe cách xa cổng trường ít nhất 25 mét, đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signRestaurantDeposit",
      prompt: "What does this notice at the restaurant entrance say?",
      display: {
        A: "You can walk in anytime without booking during the holiday.",
        B: "You need to pay a deposit to secure your table reservation.",
        C: "You can only make table reservations on the actual day of Tet.",
        D: "You do not need to pay any money in advance for your table."
      },
      correct: "B",
      explanation: "Biển ghi \"Table Reservations For Tet Holiday: 10% DEPOSIT REQUIRED\" — cần đặt cọc 10% để giữ chỗ đặt bàn, đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "weddingCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "position", B: "occasion", C: "condition", D: "situation" },
      correct: "B",
      explanation: "\"an official <b>occasion</b>\" (một dịp/sự kiện chính thức) khớp với việc lễ ăn hỏi là một sự kiện để hai gia đình gặp gỡ chính thức."
    },
    { id: 18, section: "III", type: "mcq", passage: "weddingCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "support", B: "prepare", C: "demand", D: "invite" },
      correct: "B",
      explanation: "\"<b>prepare</b> a representative\" (chuẩn bị/cử một người đại diện) là hành động mỗi gia đình cần làm trước lễ ăn hỏi."
    },
    { id: 19, section: "III", type: "mcq", passage: "weddingCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "share", B: "exchange", C: "give", D: "transfer" },
      correct: "B",
      explanation: "\"<b>exchange</b> gifts\" (trao đổi quà) là cụm cố định, phù hợp với việc hai gia đình cùng trao quà cho nhau trong lễ ăn hỏi."
    },
    { id: 20, section: "III", type: "mcq", passage: "weddingCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "for", B: "at", C: "in", D: "on" },
      correct: "D",
      explanation: "\"be based <b>on</b> + N\" (dựa trên cái gì) là cụm giới từ cố định — thời điểm cưới được chọn dựa trên lịch âm."
    },
    { id: 21, section: "III", type: "mcq", passage: "weddingCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "which", B: "what", C: "who", D: "where" },
      correct: "A",
      explanation: "Cần đại từ quan hệ thay cho danh từ chỉ vật \"Gifts\" làm chủ ngữ trong mệnh đề quan hệ → dùng <b>which</b> (\"Gifts which are put in trays...\")."
    },
    { id: 22, section: "III", type: "mcq", passage: "weddingCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "catch", B: "make", C: "bring", D: "take" },
      correct: "C",
      explanation: "\"<b>bring</b> luck to sb\" (mang lại may mắn cho ai) là cụm cố định, phù hợp với quan niệm số lẻ mang lại may mắn cho cặp đôi."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "somethingOldReading",
      prompt: "The tradition of \"Something old, something new, something borrowed, something blue\" started in America.",
      correct: "False",
      explanation: "Sai. Bài đọc nói câu nói này \"dates back to 19th century <b>England</b>\" (bắt nguồn từ nước Anh thế kỷ 19), không phải Mỹ."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "somethingOldReading",
      prompt: "A bride's mother's wedding dress can be used as \"something old\".",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Some brides wear their mother's wedding dress... as something old\"."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "somethingOldReading",
      prompt: "\"Something borrowed\" represents the willingness of friends and family to assist the bride.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Something borrowed... means the bride has friends and family who are willing to help her\"."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "somethingOldReading",
      prompt: "Only the single women stand a chance to get married next according to the garter tradition.",
      correct: "False",
      explanation: "Sai. Bài đọc nói chú rể ném nịt tất cho các \"single men\" (đàn ông độc thân), người đàn ông bắt được sẽ là người tiếp theo kết hôn — không liên quan đến phụ nữ độc thân."
    },
    { id: 27, section: "IV", type: "mcq", passage: "somethingOldReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "Traditional items that an American bride wears or carries and their meanings.",
        B: "The differences between American and English weddings.",
        C: "The historical background of 19th-century wedding customs.",
        D: "How modern brides choose their wedding dresses and jewelry."
      },
      correct: "A",
      explanation: "Cả bài giải thích ý nghĩa của \"something old, new, borrowed, blue\" — những vật cô dâu Mỹ mặc/mang theo và ý nghĩa của chúng → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "somethingOldReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "The bride throws her leg garter to the single men after the wedding ceremony.",
        B: "\"Something new\" usually refers to a pair of new shoes or the wedding dress.",
        C: "A light blue fingernail color can be a creative choice for \"something blue\".",
        D: "\"Something blue\" reflects the trust and faith between the bride and the groom."
      },
      correct: "A",
      explanation: "Bài đọc nói chính <b>chú rể (the groom)</b> mới là người ném nịt tất cho các chàng trai độc thân, không phải cô dâu → câu A gán nhầm hành động này cho cô dâu nên đây là câu SAI so với bài đọc."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The Tet holiday is one of the most important ______________ celebrations in Vietnam.",
      wordGiven: "fest", accepted: ["festive"], correct: "festive",
      explanation: "Cần tính từ đứng trước danh từ \"celebrations\". <b>fest</b> → <b>festive</b> (adj, +ive): mang không khí lễ hội."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Several weeks before the New Year, the Vietnamese do a lot of house ______________.",
      wordGiven: "clean", accepted: ["cleaning"], correct: "cleaning",
      explanation: "\"do (a lot of) house <b>cleaning</b>\" (dọn dẹp nhà cửa) — cần danh động từ/danh từ <b>cleaning</b> (+ing) làm tân ngữ của \"do\"."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The whole family gets together for a ______________ dinner on New Year's Eve.",
      wordGiven: "reunite", accepted: ["reunion"], correct: "reunion",
      explanation: "Cần danh từ đứng trước \"dinner\" để tạo thành \"reunion dinner\" (bữa cơm đoàn viên). <b>reunite</b> (v) → <b>reunion</b> (n)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "On New Year's morning, children receive lucky money wrapped in ______________ red envelopes.",
      wordGiven: "beauty", accepted: ["beautiful"], correct: "beautiful",
      explanation: "Cần tính từ đứng trước danh từ \"red envelopes\". <b>beauty</b> (n) → <b>beautiful</b> (adj, +ful): đẹp."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Wedding customs in Vietnam can be quite ______________ with many steps.",
      wordGiven: "complicate", accepted: ["complicated"], correct: "complicated",
      explanation: "Cần tính từ đứng sau động từ \"be\" (can be). <b>complicate</b> (v) → <b>complicated</b> (adj, +ed): phức tạp."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The representatives of the two families will make formal ______________ during the engagement ceremony.",
      wordGiven: "announce", accepted: ["announcements"], correct: "announcements",
      explanation: "\"make formal <b>announcements</b>\" (đưa ra những thông báo chính thức) — cần danh từ số nhiều vì không có mạo từ \"an\" trước chỗ trống. <b>announce</b> (v) → <b>announcement(s)</b> (n, +ment)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "reunionEntry",
      prompt: "To maintain the strong bond among former teammates, they usually ____________________ every summer.",
      accepted: ["hold a reunion"], correct: "hold a reunion",
      explanation: "Từ điển cho ví dụ \"They <b>hold a reunion</b> every five years to keep in touch with old colleagues.\" — rất khớp với ngữ cảnh duy trì liên kết giữa các đồng đội cũ."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "reunionEntry",
      prompt: "All my aunts, uncles, and cousins are flying in this weekend because we are having a ____________________ to celebrate our grandparents' anniversary.",
      accepted: ["family reunion"], correct: "family reunion",
      explanation: "Từ điển cho ví dụ \"We are having a <b>family reunion</b> next week to celebrate grandmother's 80th birthday.\" — \"family reunion\" (họp mặt gia đình) khớp với việc cô dì chú bác họ hàng tụ họp."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "You must not talk loudly in the library because it is a strict rule.",
      starter: "You are not allowed",
      accepted: ["you are not allowed to talk loudly in the library"],
      correct: "You are not allowed to talk loudly in the library.",
      explanation: "\"must not + V\" (không được phép làm gì, do luật lệ) có thể chuyển thành \"<b>be not allowed to + V</b>\" (không được phép làm gì) — cùng diễn tả sự cấm đoán bắt buộc.<br>→ <i>You are not allowed to talk loudly in the library.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Children should greet the elderly respectfully.",
      starter: "It is necessary for",
      accepted: ["it is necessary for children to greet the elderly respectfully"],
      correct: "It is necessary for children to greet the elderly respectfully.",
      explanation: "\"S + should + V\" (nên làm gì) có thể chuyển thành \"<b>It is necessary for + O + to V</b>\" (cần thiết đối với ai đó phải làm gì) — cùng mang nghĩa khuyên nhủ/yêu cầu.<br>→ <i>It is necessary for children to greet the elderly respectfully.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "This is the most splendid city I have ever visited by night.",
      starter: "No other city I have visited by night is",
      accepted: [
        "no other city i have visited by night is as splendid as this city",
        "no other city i have visited by night is so splendid as this city"
      ],
      correct: "No other city I have visited by night is as splendid as this city. / No other city I have visited by night is so splendid as this city.",
      explanation: "Chuyển so sánh nhất (\"the most splendid\") sang so sánh ngang bằng ở dạng phủ định: <b>S + is + the most + adj + N</b> → <b>No other + N + is + as/so + adj + as + S</b>. Cả \"as...as\" và \"so...as\" đều dùng được trong cấu trúc phủ định này.<br>→ <i>No other city I have visited by night is as splendid as this city.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "His current job is so good that he will never quit it.",
      starter: "His current job is too",
      accepted: ["his current job is too good for him to ever quit"],
      correct: "His current job is too good for him to ever quit.",
      explanation: "Cấu trúc \"so + adj + that + S + will never + V\" (quá... đến nỗi sẽ không bao giờ...) chuyển thành \"<b>too + adj + for sb + to V</b>\" (quá... để ai đó làm gì) — cùng diễn tả mức độ khiến hành động không xảy ra.<br>→ <i>His current job is too good for him to ever quit.</i>"
    }
  ]
};
