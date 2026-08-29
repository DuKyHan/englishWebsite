const TEST = {
  id: "test43",
  grade: "Grade 7 — Global Success",
  unit: "Unit 4: Music and Arts",
  title: "Grade 7 · Unit 4: Music and Arts · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test43.html",
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
    { id: "VI", title: "Look at the dictionary entry of “music”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    leonardoCloze: "One of the most famous people in the history of art and science was Leonardo da Vinci. He was born in Italy. As a child, Leonardo (17) ________ great talent in drawing and music. After finishing school, he became an apprentice to a well-known artist and painted many beautiful paintings. Leonardo also played the lyre, a musical instrument, and loved to compose songs. His ability to combine art and science helped (18) ________ get a deeper understanding (19) ________ the world. One of his most famous paintings, the Mona Lisa, is known all over the world today. He kept many notebooks (20) ________ he drew inventions, studies of the human body, and musical instruments. People still admire his (21) ________ and creativity. Leonardo da Vinci is often (22) ________ a genius.",
    musicAndArtsReading: "Hi! My name is Andrew. I'm twenty years old. I love music. My earliest memory of music is the songs my mother used to sing to me when I was about three or four years old. I used to have music lessons at school too. My mother wanted me to take up the piano, but I didn't like it at all because I loved to play the guitar. When I was ten, I bought my first record with some birthday money. I think it was the record by the Beatles. As I grew older, my musical taste changed. When I was a teenager, we used to go to clubs and pop concerts to see groups playing live, mostly rock and pop. At that time, I didn't like classical music at all. Later, when I went to university, I really got into classical music and started going to concerts. I was particularly keen on opera. Nowadays, I listen to all sorts of music, but I'm not too keen on loud rock music. On the whole, I prefer classical music and opera, but I still listen to pop music in my car and play the guitar sometimes. I haven't been to any concerts for ages, but I've always got a CD at home. Music is an important part of my life.",
    musicEntry: {
      word: "music", ipa: "/ˈmjuːzɪk/", pos: "noun",
      def: "1. sounds that are sung or played to give pleasure.",
      examples: [
        "I love listening to <b>pop music</b> on the radio.",
        "She can <b>read music</b> very well because she plays the piano.",
        "He likes to <b>write music</b> in his free time.",
        "Turn the volume down! The <b>music is too loud</b>."
      ]
    }
  },
  images: {
    noticeSchoolTripArtGallery: "assets/images/notice_school_trip_art_gallery.jpg",
    noticePrivateDoor: "assets/images/notice_private_door.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "contest", B: "screen", C: "special", D: "magic" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái \"c\". \"contest\" /ˈkɒntest/, \"screen\" /skriːn/, \"magic\" /ˈmædʒɪk/ đều có \"c\" phát âm là <b>/k/</b>. Riêng \"special\" /ˈspeʃl/ có \"c\" phát âm là <b>/ʃ/</b> → khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "bright", B: "artist", C: "final", D: "item" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"i\". \"bright\" /braɪt/, \"final\" /ˈfaɪnl/, \"item\" /ˈaɪtəm/ đều có \"i\" phát âm là <b>/aɪ/</b>. Riêng \"artist\" /ˈɑːrtɪst/ có \"i\" phát âm là <b>/ɪ/</b> → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "performance", B: "character", C: "appearance", D: "impression" },
      correct: "B",
      explanation: "\"performance\" /pərˈfɔːrməns/, \"appearance\" /əˈpɪrəns/, \"impression\" /ɪmˈpreʃn/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"character\" /ˈkærəktər/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "season", B: "theatre", C: "guitar", D: "actress" },
      correct: "C",
      explanation: "\"season\" /ˈsiːzn/, \"theatre\" /ˈθiːətər/, \"actress\" /ˈæktrəs/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"guitar\" /ɡɪˈtɑːr/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"Look at that huge building over there!\"",
      prompt: "Mary: \"Wow! Their house is really big. It looks __________ a palace.\"",
      display: { A: "unlike", B: "alike", C: "like", D: "dislike" },
      correct: "C",
      explanation: "\"look <b>like</b> + N\" (trông giống như cái gì) là cụm cố định, \"like\" ở đây là giới từ."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Minh: \"Did you enjoy the musical event yesterday evening?\"",
      prompt: "Nam: \"Yes, the __________ performed its final concert of the season perfectly.\"",
      display: { A: "team", B: "scientists", C: "orchestra", D: "group" },
      correct: "C",
      explanation: "\"<b>orchestra</b>\" (dàn nhạc) là danh từ phù hợp với ngữ cảnh biểu diễn buổi hòa nhạc cuối mùa."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Lan: \"Is your new pencil case expensive?\"",
      prompt: "Hoa: \"Not at all. Your pencil case is as __________ mine.\"",
      display: { A: "not as", B: "cheap as", C: "not cheap", D: "so cheap" },
      correct: "B",
      explanation: "Cấu trúc so sánh ngang bằng \"as + adj + as\" (rẻ như). <b>as cheap as</b>."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Peter: \"The leading actress changed her __________ many times during the play.\"",
      prompt: "Jane: \"I know! I really liked her last traditional dress.\"",
      display: { A: "costume", B: "role", C: "voice", D: "custom" },
      correct: "A",
      explanation: "\"<b>costume</b>\" (trang phục biểu diễn) phù hợp với ngữ cảnh về trang phục truyền thống của diễn viên."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Teacher: \"Who can name a famous historical writer of southern Vietnam?\"",
      prompt: "An: \"Nguyen Dinh Chieu was known as one of the most famous __________ in Viet Nam.\"",
      display: { A: "poetry", B: "poets", C: "poet", D: "poem" },
      correct: "B",
      explanation: "\"one of the most famous + <b>danh từ số nhiều</b>\" → cần danh từ chỉ người số nhiều. <b>poets</b> (nhà thơ)."
    },
    { id: 10, section: "I", type: "mcq",
      context: "John: \"Do you like traditional jazz music?\"",
      prompt: "David: \"Yes, but I think jazz music is __________ from classical music.\"",
      display: { A: "the same", B: "similar", C: "same", D: "different" },
      correct: "D",
      explanation: "\"be <b>different</b> from + N\" (khác biệt với) là cụm cố định với giới từ \"from\"."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Lucy: \"Who wrote these beautiful melodies for the school festival?\"",
      prompt: "Ben: \"My brother did! He __________ lots of good songs in his free time.\"",
      display: { A: "goes", B: "paints", C: "takes", D: "composes" },
      correct: "D",
      explanation: "\"<b>compose</b> songs\" (sáng tác nhạc) là cụm động từ phù hợp với ngữ cảnh viết nhạc."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Luke: \"What kind of show is this?\"",
      prompt: "Andres: \"__________ It makes me laugh a lot.\"",
      display: { A: "Gangnam Style.", B: "Bruce Lee.", C: "Comedy.", D: "I don't like that kind." },
      correct: "C",
      explanation: "\"<b>Comedy</b>\" (hài kịch) là thể loại khiến người xem cười, phù hợp với câu trả lời."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Linh: \"I wanted to share with you something new I've been enjoying lately. I even started learning to play the guitar!\"",
      prompt: "Mai: \"__________\"",
      display: { A: "Music is loud sometimes.", B: "I'm not very good at painting.", C: "I think school is hard.", D: "That sounds fun! What kind of music do you like?" },
      correct: "D",
      explanation: "\"<b>That sounds fun! What kind of music do you like?</b>\" là phản hồi tự nhiên, thể hiện sự quan tâm đến sở thích chơi guitar của Linh."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Bao: \"__________\"",
      prompt: "Chi: \"It helped me relax and feel more creative after school.\"",
      display: { A: "How does listening to music make you feel?", B: "Is traditional art very boring?", C: "Where did you buy your first guitar?", D: "Who teaches you music at school?" },
      correct: "A",
      explanation: "\"<b>How does listening to music make you feel?</b>\" phù hợp nhất vì câu trả lời của Chi nói về cảm giác thư giãn khi nghe nhạc."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeSchoolTripArtGallery",
      prompt: "What does the sign tell you?",
      display: {
        A: "The school trip to the art gallery is on Friday.",
        B: "You must see the secretary soon to buy a ticket.",
        C: "You should wait until Friday to buy your ticket.",
        D: "There are no more tickets left to buy."
      },
      correct: "B",
      explanation: "Biển ghi \"BUY YOUR TICKETS FROM THE SECRETARY BY FRIDAY!\" nghĩa là phải mua vé từ thư ký trước thứ Sáu → \"<b>You must see the secretary soon to buy a ticket.</b>\", đáp án B."
    },
    { id: 16, section: "II", type: "mcq", image: "noticePrivateDoor",
      prompt: "What does this sign mean?",
      display: {
        A: "The door is closed only during the weekend.",
        B: "You can go through this door if you want.",
        C: "There are two other doors you can open.",
        D: "You cannot enter through this door."
      },
      correct: "D",
      explanation: "Biển ghi \"PRIVATE DOOR — NO ENTRY FOR UNAUTHORIZED PERSONS\" nghĩa là không được phép đi qua cửa này nếu không có thẩm quyền → \"<b>You cannot enter through this door.</b>\", đáp án D."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "leonardoCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "showed", B: "carried", C: "brought", D: "shared" },
      correct: "A",
      explanation: "\"<b>showed</b> great talent\" (bộc lộ tài năng) là cách diễn đạt tự nhiên nhất khi nói về một đứa trẻ có năng khiếu."
    },
    { id: 18, section: "III", type: "mcq", passage: "leonardoCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "his", B: "he", C: "himself", D: "him" },
      correct: "D",
      explanation: "Cấu trúc \"helped + tân ngữ + V nguyên thể\" (giúp ai làm gì) cần đại từ tân ngữ. <b>him</b>."
    },
    { id: 19, section: "III", type: "mcq", passage: "leonardoCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "for", B: "with", C: "about", D: "of" },
      correct: "D",
      explanation: "\"a deeper understanding <b>of</b> the world\" (một sự hiểu biết sâu sắc hơn về thế giới) là cụm cố định với giới từ \"of\"."
    },
    { id: 20, section: "III", type: "mcq", passage: "leonardoCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "who", B: "which", C: "when", D: "where" },
      correct: "D",
      explanation: "\"notebooks <b>where</b> he drew inventions...\" — đại từ quan hệ chỉ nơi chốn (trong đó), thay cho \"in which\"."
    },
    { id: 21, section: "III", type: "mcq", passage: "leonardoCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "career", B: "duty", C: "job", D: "work" },
      correct: "D",
      explanation: "\"admire his <b>work</b> and creativity\" (ngưỡng mộ tác phẩm và sự sáng tạo của ông) — \"work\" ở đây nghĩa là tác phẩm nghệ thuật."
    },
    { id: 22, section: "III", type: "mcq", passage: "leonardoCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "called", B: "said", C: "told", D: "shouted" },
      correct: "A",
      explanation: "\"be <b>called</b> a genius\" (được gọi là thiên tài) là cấu trúc bị động cố định với \"call\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "musicAndArtsReading",
      prompt: "Andrew's mother wanted him to learn how to play the guitar.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"My mother wanted me to take up the piano, but I didn't like it at all because I loved to play the guitar.\" — mẹ Andrew muốn anh học piano, không phải guitar."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "musicAndArtsReading",
      prompt: "Andrew did not like classical music when he was a teenager.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"At that time, I didn't like classical music at all.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "musicAndArtsReading",
      prompt: "Andrew started to like opera music when he was a university student.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Later, when I went to university, I really got into classical music... I was particularly keen on opera.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "musicAndArtsReading",
      prompt: "Andrew still plays a musical instrument nowadays.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"I still listen to pop music in my car and play the guitar sometimes.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "musicAndArtsReading",
      prompt: "What was the first record Andrew bought when he was ten?",
      display: { A: "A record by the Beatles.", B: "A piano album.", C: "A classical music CD.", D: "A collection of opera songs." },
      correct: "A",
      explanation: "Bài đọc: \"When I was ten, I bought my first record with some birthday money. I think it was the record by the Beatles.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "musicAndArtsReading",
      prompt: "Which kind of music does Andrew NOT like very much now?",
      display: { A: "Loud rock music.", B: "Pop music.", C: "Classical music.", D: "Opera music." },
      correct: "A",
      explanation: "Bài đọc: \"Nowadays, I listen to all sorts of music, but I'm not too keen on loud rock music.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The young artist made a great _____________ on the judges with her skills.",
      wordGiven: "IMPRESS", accepted: ["impression"], correct: "impression",
      explanation: "Cần danh từ sau \"great\". <b>impress</b> (v) → <b>impression</b> (n, ấn tượng)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The actors gave a wonderful _____________ in the school play yesterday.",
      wordGiven: "PERFORM", accepted: ["performance"], correct: "performance",
      explanation: "Cần danh từ sau \"wonderful\". <b>perform</b> (v) → <b>performance</b> (n, màn trình diễn)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "We are planning a big _____________ for the school's music festival.",
      wordGiven: "CELEBRATE", accepted: ["celebration"], correct: "celebration",
      explanation: "Cần danh từ sau \"big\". <b>celebrate</b> (v) → <b>celebration</b> (n, lễ kỷ niệm)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Digital _____________ allows people to capture beautiful moments easily.",
      wordGiven: "PHOTOGRAPHY", accepted: ["photography"], correct: "photography",
      explanation: "\"photography\" (n, nhiếp ảnh) đã đúng là danh từ cần dùng để làm chủ ngữ cho câu — từ cho sẵn giữ nguyên hình thức."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Taylor Swift is a very talented _____________ who has millions of fans worldwide.",
      wordGiven: "SING", accepted: ["singer"], correct: "singer",
      explanation: "Cần danh từ chỉ người sau \"talented\". <b>sing</b> (v) → <b>singer</b> (n, ca sĩ)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The traditional water _____________ show attracted a lot of foreign tourists.",
      wordGiven: "PUPPET", accepted: ["puppet"], correct: "puppet",
      explanation: "\"puppet\" (n, con rối) ghép với \"show\" tạo thành \"water puppet show\" (múa rối nước) — từ cho sẵn giữ nguyên hình thức."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "musicEntry",
      prompt: "If you want to learn the guitar, it helps if you can _____________________.",
      accepted: ["read music"], correct: "read music",
      explanation: "Từ điển cho ví dụ \"She can <b>read music</b> very well because she plays the piano.\" — khớp với ngữ cảnh học guitar cần biết đọc bản nhạc."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "musicEntry",
      prompt: "Teenagers usually enjoy _____________________ like songs by Taylor Swift or BTS.",
      accepted: ["pop music"], correct: "pop music",
      explanation: "Từ điển cho ví dụ \"I love listening to <b>pop music</b> on the radio.\" — khớp với ngữ cảnh nhạc của Taylor Swift, BTS."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Do you like seeing a water puppet show?",
      starter: "Would you",
      accepted: ["would you like to see a water puppet show"],
      correct: "Would you like to see a water puppet show?",
      explanation: "\"like + V-ing\" (thích làm gì nói chung) có thể viết lại bằng \"<b>would like + to V</b>\" (muốn làm gì, mang tính lời mời/hỏi ý kiến cụ thể), giữ nguyên nghĩa.<br>→ <i>Would you like to see a water puppet show?</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "My English is better than my French.",
      starter: "I am better",
      accepted: ["i am better at english than french"],
      correct: "I am better at English than French.",
      explanation: "\"N1 + is better than + N2\" (giỏi cái gì hơn cái gì) có thể viết lại bằng \"<b>be better at + N1 + than + N2</b>\" khi chuyển sang chủ ngữ là người, giữ nguyên nghĩa.<br>→ <i>I am better at English than French.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Grapefruit juice isn't as sweet as orange juice.",
      starter: "Orange juice is",
      accepted: ["orange juice is sweeter than grapefruit juice", "orange juice is more sweet than grapefruit juice"],
      correct: "Orange juice is sweeter than grapefruit juice. (hoặc: more sweet than grapefruit juice)",
      explanation: "\"A + isn't as + adj + as + B\" (A không... bằng B) có thể viết lại bằng so sánh hơn \"<b>B + is + adj-er/more adj + than + A</b>\", giữ nguyên nghĩa.<br>→ <i>Orange juice is sweeter than grapefruit juice.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "I think your sister looks like singer Hong Nhung.",
      starter: "I think your sister looks",
      accepted: ["i think your sister looks similar to singer hong nhung"],
      correct: "I think your sister looks similar to singer Hong Nhung.",
      explanation: "\"look like + N\" (trông giống ai) có thể viết lại bằng \"<b>look similar to + N</b>\", giữ nguyên nghĩa.<br>→ <i>I think your sister looks similar to singer Hong Nhung.</i>"
    }
  ]
};
