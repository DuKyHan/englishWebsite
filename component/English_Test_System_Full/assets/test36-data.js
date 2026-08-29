const TEST = {
  id: "test36",
  grade: "Grade 6 — Global Success",
  unit: "Unit 6: Our Tet holiday",
  title: "Grade 6 · Unit 6: Our Tet holiday · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test36.html",
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
    { id: "VI", title: "Look at the dictionary entry of “joy”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    newYearCloze: "In some Asian countries, people celebrate the New Year (17) ________ four or five days. In other countries, they celebrate Christmas and the New Year together. On New Year's Eve, British people often eat, drink, and go to parties. Many people go to Trafalgar Square in London or join a street party in (18) ________ city. Others visit friends or go to pubs and restaurants. These places are very (19) ________ on that night. There is a great atmosphere (20) ________ everyone waits for Big Ben to strike midnight. Then people hold hands to sing the traditional Scottish song Auld Lang Syne happily. After that, many people (21) ________ fireworks and look forward (22) ________ the new year with hope and joy.",
    tetHolidayReading: "Tet holiday is celebrated on the first day of the Lunar New Year in Viet Nam. Some weeks before the New Year, the Vietnamese clean their houses and paint the walls. New clothes are bought for the occasion. One or two days before the festival, people make Banh chung, which is the traditional cake, and kinds of jam. On New Year's Eve, the whole family get together for a reunion dinner. Every member of the family should be present during the dinner in which many different kinds of dishes are served. On the New Year morning, the young members of the family pay their respects to the elders. And the children receive lucky money wrapped in red tiny envelopes. Then people go to visit their neighbors, friends and relatives.",
    joyEntry: {
      word: "joy", ipa: "/dʒɔɪ/", pos: "noun",
      def: "1. a feeling of great happiness.",
      examples: [
        "I can remember the <b>joy of childhood</b>.",
        "The team wept with <b>joy and relief</b>.",
        "Her books bring <b>great joy</b> to millions of readers.",
        "She find <b>great joy in</b> playing the piano."
      ]
    }
  },
  images: {
    noticeLibraryLateFine: "assets/images/notice_library_late_fine.jpg",
    signHardHatArea: "assets/images/sign_hard_hat_area.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "time", B: "wish", C: "spring", D: "visit" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"i\". \"wish\" /wɪʃ/, \"spring\" /sprɪŋ/, \"visit\" /ˈvɪzɪt/ đều có \"i\" phát âm là <b>/ɪ/</b>. Riêng \"time\" /taɪm/ có \"i\" phát âm là <b>/aɪ/</b> → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "plant", B: "preparation", C: "fight", D: "custom" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"t\". \"plant\" /plænt/, \"fight\" /faɪt/, \"custom\" /ˈkʌstəm/ đều có \"t\" phát âm là <b>/t/</b>. Riêng \"preparation\" /ˌprepəˈreɪʃn/ có \"t\" (trong \"-tion\") phát âm là <b>/ʃ/</b> → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "paper", B: "success", C: "laughter", D: "sugar" },
      correct: "B",
      explanation: "\"paper\" /ˈpeɪpər/, \"laughter\" /ˈlæftər/, \"sugar\" /ˈʃʊɡər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"success\" /səkˈses/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "furniture", B: "amazing", C: "relative", D: "gathering" },
      correct: "B",
      explanation: "\"furniture\" /ˈfɜːrnɪtʃər/, \"relative\" /ˈrelətɪv/, \"gathering\" /ˈɡæðərɪŋ/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"amazing\" /əˈmeɪzɪŋ/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Lan: \"Shhh! Don't talk too loud. My sister is sleeping.\"",
      prompt: "Nam: \"__________\"",
      display: { A: "I didn't know she was gone.", B: "Let's play some loud music!", C: "Why don't we wake her up?", D: "Sorry, I'll be quiet." },
      correct: "D",
      explanation: "\"<b>Sorry, I'll be quiet.</b>\" là lời đáp phù hợp khi được nhắc nhở giữ yên lặng."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Minh: \"You shouldn't __________ late for school tomorrow morning.\"",
      prompt: "An: \"Yes, I know. I will set my alarm clock right now.\"",
      display: { A: "being", B: "is", C: "be", D: "are" },
      correct: "C",
      explanation: "Sau động từ khiếm khuyết \"shouldn't\" cần động từ nguyên thể không \"to\": \"shouldn't <b>be</b> late\"."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Tom: \"We shouldn't play music __________ after midnight because people are sleeping.\"",
      prompt: "Mary: \"You are right. Let's turn down the volume.\"",
      display: { A: "loud", B: "careful", C: "right", D: "easy" },
      correct: "A",
      explanation: "\"play music <b>loud</b>\" (mở nhạc to) — \"loud\" ở đây làm trạng từ bổ nghĩa cho động từ \"play\", cách dùng thông tục phổ biến."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Nga: \"At Tet, many people present rice to wish __________ enough food throughout the year.\"",
      prompt: "Ba: \"Wow, I didn't know about that interesting tradition!\"",
      display: { A: "in", B: "at", C: "with", D: "for" },
      correct: "D",
      explanation: "\"wish <b>for</b> + N\" (mong ước có được điều gì) là cụm cố định."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Peter: \"Do you like Tet holiday in Viet Nam?\"",
      prompt: "Hoa: \"Yes, very much. Tet is a wonderful time for __________ gathering.\"",
      display: { A: "family", B: "school", C: "friend", D: "house" },
      correct: "A",
      explanation: "\"<b>family</b> gathering\" (sự sum họp gia đình) phù hợp với ý nghĩa của ngày Tết."
    },
    { id: 10, section: "I", type: "mcq",
      context: "John: \"What do people usually do on the first day of Tet?\"",
      prompt: "Mai: \"You shouldn't __________ things like glasses or bowls on this day because it brings bad luck.\"",
      display: { A: "break", B: "make", C: "cook", D: "hang" },
      correct: "A",
      explanation: "\"shouldn't <b>break</b> things\" (không nên làm vỡ đồ) — theo quan niệm dân gian, làm vỡ đồ ngày đầu năm mang lại điềm xui."
    },
    { id: 11, section: "I", type: "mcq",
      context: "David: \"Who is the first person visiting your house on New Year's Day?\"",
      prompt: "Long: \"We call that person a __________. We believe they bring good luck to the family.\"",
      display: { A: "teacher", B: "relative", C: "parents", D: "first footer" },
      correct: "D",
      explanation: "\"<b>first footer</b>\" (người xông đất) là người đầu tiên bước vào nhà sau giao thừa, theo phong tục mang lại may mắn."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Lucy: \"What kind of clothes do people in many countries wear on New Year's Day?\"",
      prompt: "Elena: \"They often wear their __________ clothes to show respect to their tradition.\"",
      display: { A: "summer", B: "traditional", C: "ordinary", D: "tradition" },
      correct: "B",
      explanation: "Cần tính từ đứng trước danh từ \"clothes\". <b>tradition</b> (n) → <b>traditional</b> (adj, +al, truyền thống)."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Tim: \"Happy New Year! I hope all your wishes come true.\"",
      prompt: "Ben: \"__________\"",
      display: { A: "Thanks! The same to you!", B: "What's happening?", C: "I don't think so.", D: "Yes, let's do that." },
      correct: "A",
      explanation: "\"<b>Thanks! The same to you!</b>\" là lời đáp phù hợp cho lời chúc năm mới."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Nam: \"__________\"",
      prompt: "Lan: \"I helped my parents clean and decorate the house with peach blossoms.\"",
      display: { A: "Where have you been? I've been waiting for ages!", B: "How do you go to school every day?", C: "Do you like eating Chung cake during Tet?", D: "What did you do last Tet Holiday?" },
      correct: "D",
      explanation: "Câu trả lời của Lan kể lại một việc đã làm trong quá khứ, nên câu hỏi phù hợp là \"<b>What did you do last Tet Holiday?</b>\""
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeLibraryLateFine",
      prompt: "What does this notice tell you?",
      display: {
        A: "There is a daily fee for borrowing books.",
        B: "You can borrow books for free at this library.",
        C: "Books can only be borrowed with the price of $1.",
        D: "You will be fined if you return books late."
      },
      correct: "D",
      explanation: "Thông báo \"LATE RETURN FINES APPLIED. BOOKS RETURNED AFTER THE DUE DATE WILL INCUR A FEE OF $1 PER DAY PER BOOK.\" nghĩa là trả sách muộn sẽ bị phạt tiền → \"<b>You will be fined if you return books late.</b>\", đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signHardHatArea",
      prompt: "What does this sign mean?",
      display: {
        A: "You don't need to wear a hard hat in this area.",
        B: "This area provides hard hats for tourists.",
        C: "There is a free hard hat in this area.",
        D: "You must wear a hard hat in this area."
      },
      correct: "D",
      explanation: "Biển \"HARD HAT AREA. MUST BE WORN AT ALL TIMES.\" nghĩa là bắt buộc phải đội mũ bảo hộ trong khu vực này → \"<b>You must wear a hard hat in this area.</b>\", đáp án D."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "newYearCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "in", B: "since", C: "for", D: "during" },
      correct: "C",
      explanation: "\"celebrate the New Year <b>for</b> four or five days\" — giới từ \"for\" dùng để chỉ khoảng thời gian kéo dài."
    },
    { id: 18, section: "III", type: "mcq", passage: "newYearCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "its", B: "our", C: "his", D: "their" },
      correct: "D",
      explanation: "\"join a street party in <b>their</b> city\" — tính từ sở hữu \"their\" thay cho \"people\" (số nhiều) đã nhắc ở trên."
    },
    { id: 19, section: "III", type: "mcq", passage: "newYearCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "popular", B: "modern", C: "crowded", D: "heavy" },
      correct: "C",
      explanation: "\"These places are very <b>crowded</b> on that night\" — phù hợp với ngữ cảnh nhiều người đi tiệc, quán bar vào đêm giao thừa."
    },
    { id: 20, section: "III", type: "mcq", passage: "newYearCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "when", B: "which", C: "because", D: "until" },
      correct: "A",
      explanation: "\"There is a great atmosphere <b>when</b> everyone waits for Big Ben...\" — \"when\" giới thiệu mệnh đề chỉ thời gian."
    },
    { id: 21, section: "III", type: "mcq", passage: "newYearCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "see", B: "notice", C: "watch", D: "look" },
      correct: "C",
      explanation: "\"<b>watch</b> fireworks\" là cụm động từ cố định nghĩa \"xem pháo hoa\"."
    },
    { id: 22, section: "III", type: "mcq", passage: "newYearCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "for", B: "to", C: "after", D: "at" },
      correct: "B",
      explanation: "\"look forward <b>to</b> + N/V-ing\" (mong chờ) là cụm cố định luôn đi với giới từ \"to\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "tetHolidayReading",
      prompt: "Vietnamese people paint their walls and clean their houses a few weeks before Tet.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Some weeks before the New Year, the Vietnamese clean their houses and paint the walls.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "tetHolidayReading",
      prompt: "Banh chung is made about a week before New Year's Eve.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"One or two days before the festival, people make Banh chung\" — chỉ một hoặc hai ngày trước, không phải một tuần."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "tetHolidayReading",
      prompt: "It is important for all family members to attend the reunion dinner.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Every member of the family should be present during the dinner.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "tetHolidayReading",
      prompt: "Children give lucky money to the elders on the New Year morning.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"the children receive lucky money\" — trẻ em NHẬN tiền lì xì, không phải cho."
    },
    { id: 27, section: "IV", type: "mcq", passage: "tetHolidayReading",
      prompt: "What do people do one or two days before Tet?",
      display: { A: "They make traditional cake and jam.", B: "They buy new clothes.", C: "They paint their houses.", D: "They visit their neighbors and friends." },
      correct: "A",
      explanation: "Bài đọc: \"One or two days before the festival, people make Banh chung... and kinds of jam.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "tetHolidayReading",
      prompt: "The lucky money for children is put inside __________.",
      display: { A: "small red envelopes", B: "large boxes", C: "traditional cakes", D: "new clothes" },
      correct: "A",
      explanation: "Bài đọc: \"the children receive lucky money wrapped in red tiny envelopes\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Lucy and I have _____________ opinions, but we still get on well with each other.",
      wordGiven: "DIFFER", accepted: ["different"], correct: "different",
      explanation: "Cần tính từ đứng trước danh từ \"opinions\". <b>differ</b> (v) → <b>different</b> (adj, khác nhau)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The Easter Bunny brings children Easter baskets with eggs and _____________.",
      wordGiven: "CANDIED", accepted: ["candies"], correct: "candies",
      explanation: "Cần danh từ số nhiều song song với \"eggs\". <b>candied</b> (adj) → <b>candy</b> (n) → <b>candies</b> (số nhiều, kẹo)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Easter is a _____________ holiday for Christians around the world.",
      wordGiven: "RELIGION", accepted: ["religious"], correct: "religious",
      explanation: "Cần tính từ đứng trước danh từ \"holiday\". <b>religion</b> (n) → <b>religious</b> (adj, +ous, thuộc về tôn giáo)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "For many people, Easter celebrates the _____________ of spring.",
      wordGiven: "BEGIN", accepted: ["beginning"], correct: "beginning",
      explanation: "Cần danh từ sau mạo từ \"the\". <b>begin</b> (v) → <b>beginning</b> (n, +ing, sự bắt đầu)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "On Easter Sunday, families often come together for a _____________ dinner.",
      wordGiven: "WONDER", accepted: ["wonderful"], correct: "wonderful",
      explanation: "Cần tính từ đứng trước danh từ \"dinner\". <b>wonder</b> (n/v) → <b>wonderful</b> (adj, +ful, tuyệt vời)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The earth wears \"new clothes\" when beautiful flowers _____________ in the spring.",
      wordGiven: "BLOOMING", accepted: ["bloom"], correct: "bloom",
      explanation: "Cần động từ nguyên thể sau chủ ngữ số nhiều \"flowers\" ở thì hiện tại đơn. <b>blooming</b> (dạng V-ing) → <b>bloom</b> (v nguyên thể, nở hoa)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "joyEntry",
      prompt: "He found __________________ cooking delicious meals for his family every weekend.",
      accepted: ["great joy in"], correct: "great joy in",
      explanation: "Từ điển cho ví dụ \"She find <b>great joy in</b> playing the piano.\" — khớp với ngữ cảnh tìm thấy niềm vui trong việc nấu ăn."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "joyEntry",
      prompt: "The little boy jumped up and down with __________________ when he received the bicycle.",
      accepted: ["joy and relief"], correct: "joy and relief",
      explanation: "Từ điển cho ví dụ \"The team wept with <b>joy and relief</b>.\" — khớp với ngữ cảnh vui mừng khi nhận được món quà."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "You should behave well during Tet.",
      starter: "It's a good",
      accepted: ["it's a good idea to behave well during tet", "it's a good thing to behave well during tet"],
      correct: "It's a good idea to behave well during Tet.",
      explanation: "\"S + should + V\" (nên làm gì) có thể viết lại bằng \"<b>It's a good idea/thing to + V</b>\", giữ nguyên nghĩa khuyên nhủ.<br>→ <i>It's a good idea to behave well during Tet.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "John is cleaning some furniture in his room.",
      starter: "John is busy",
      accepted: ["john is busy cleaning some furniture in his room"],
      correct: "John is busy cleaning some furniture in his room.",
      explanation: "\"S + is/are + V-ing\" có thể viết lại bằng \"<b>S + is/are busy + V-ing</b>\" để nhấn mạnh sự bận rộn, giữ nguyên nghĩa.<br>→ <i>John is busy cleaning some furniture in his room.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Laura suggested going skiing in the Alps at Christmas.",
      starter: "Laura suggested that we should",
      accepted: ["laura suggested that we should go skiing in the alps at christmas"],
      correct: "Laura suggested that we should go skiing in the Alps at Christmas.",
      explanation: "\"suggest + V-ing\" có thể viết lại bằng \"<b>suggest that + S + should + V</b>\", giữ nguyên nghĩa đề nghị.<br>→ <i>Laura suggested that we should go skiing in the Alps at Christmas.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "My grandparents' house is more beautiful than any other house in the village.",
      starter: "No other house",
      accepted: ["no other house in the village is as beautiful as my grandparents' house", "no other house in the village is as beautiful as my grandparents house"],
      correct: "No other house in the village is as beautiful as my grandparents' house.",
      explanation: "So sánh hơn nhất kiểu \"A is more + adj + than any other N\" có thể viết lại bằng \"<b>No other N + is as + adj + as + A</b>\", giữ nguyên nghĩa so sánh nhất.<br>→ <i>No other house in the village is as beautiful as my grandparents' house.</i>"
    }
  ]
};
