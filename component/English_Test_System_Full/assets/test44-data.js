const TEST = {
  id: "test44",
  grade: "Grade 7 — Global Success",
  unit: "Unit 4: Music and Arts",
  title: "Grade 7 · Unit 4: Music and Arts · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test44.html",
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
    { id: "VI", title: "Look at the dictionary entry of “artist”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    artPreferencesCloze: "Anna loves art. Her favourite type is portrait painting (17) ________ she likes how it shows people's faces and feelings. She often visits art galleries at the weekend with (18) ________ family. Marco doesn't have one favourite type. He sometimes sees a nice photo or sculpture online and looks (19) ________ more art by that person. He thinks every kind of art is (20) ________. Lily likes street art. She (21) ________ it's creative and shows real life. She believes it can give strong (22) ________ to people in the city.",
    colourWheelReading: "Artists use colour to create patterns. Colour can also show different moods. Bright colours make us feel happy and energetic. Dark colours make us feel calm or sad. The primary colours are red, yellow, and blue. They are the colours that can be mixed together to make different colours. Mixing two primary colours makes a secondary colour. The secondary colours are orange, green, and violet. Orange is made by mixing yellow and red. Green is made by mixing yellow and blue. Violet is made by mixing red and blue. Intermediate colours can be made by mixing two primary colours and a secondary colour together. Some intermediate colours are blue violet and red orange. Black, white, and gray are special colours. They are called neutral colours. Colours have been organised into a colour wheel. It shows the three primary colours, the three secondary colours, and the six intermediate colours. Artists use the colour wheel to help them know which colours they want to use together.",
    artistEntry: {
      word: "artist", ipa: "/ˈɑːrtɪst/", pos: "noun",
      def: "1. a person who creates art by painting or drawing. 2. a person who is a professional musician, singer, or actor.",
      examples: [
        "He is a very talented <b>graphic artist</b>.",
        "The gallery is filled with beautiful paintings by <b>local artists</b>.",
        "The studio helps young <b>recording artists</b> launch their music careers."
      ]
    }
  },
  images: {
    noticeArtMuseumTrip: "assets/images/notice_art_museum_trip.jpg",
    signDoNotTouchArtworks: "assets/images/sign_do_not_touch_artworks.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "children", B: "school", C: "watch", D: "match" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"ch\". \"children\" /ˈtʃɪldrən/, \"watch\" /wɒtʃ/, \"match\" /mætʃ/ đều có \"ch\" phát âm là <b>/tʃ/</b>. Riêng \"school\" /skuːl/ có \"ch\" phát âm là <b>/k/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "originate", B: "rock", C: "foreign", D: "optional" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"o\". \"rock\" /rɒk/, \"foreign\" /ˈfɒrən/, \"optional\" /ˈɒpʃənl/ đều có \"o\" phát âm là <b>/ɒ/</b>. Riêng \"originate\" /əˈrɪdʒɪneɪt/ có \"o\" phát âm là <b>/ə/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "injury", B: "industry", C: "tornado", D: "charity" },
      correct: "C",
      explanation: "\"injury\" /ˈɪndʒəri/, \"industry\" /ˈɪndəstri/, \"charity\" /ˈtʃærəti/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"tornado\" /tɔːrˈneɪdoʊ/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "follow", B: "refuse", C: "accept", D: "arrive" },
      correct: "A",
      explanation: "\"refuse\" /rɪˈfjuːz/, \"accept\" /əkˈsept/, \"arrive\" /əˈraɪv/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"follow\" /ˈfɒloʊ/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"I love Michael Jackson's music.\"",
      prompt: "Mary: \"Me too! 'Earth Song' is one of his most __________ songs.\"",
      display: { A: "successful", B: "successfully", C: "succeed", D: "success" },
      correct: "A",
      explanation: "Cần tính từ đứng trước danh từ \"songs\". <b>successful</b> (adj, thành công)."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Phong: \"Did you manage to buy tickets for the Black Pink concert?\"",
      prompt: "Nam: \"No, we couldn't. They are __________ gold dust!\"",
      display: { A: "as", B: "from", C: "different", D: "like" },
      correct: "D",
      explanation: "\"be <b>like</b> gold dust\" (khan hiếm như vàng, cực kỳ khó kiếm) là thành ngữ so sánh cố định."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Jane: \"Do you agree with my new design ideas?\"",
      prompt: "John: \"I don't agree with you. Your ideas are completely __________.\"",
      display: { A: "different from mine", B: "same as me", C: "similar to mine", D: "the same as I" },
      correct: "A",
      explanation: "\"be <b>different from</b> + đại từ sở hữu\" (khác với cái của tôi) là cụm cố định phù hợp với ngữ cảnh không đồng ý."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Hoa: \"What makes the public spaces in our city so beautiful?\"",
      prompt: "Lan: \"They are home to many __________, including murals and sculptures.\"",
      display: { A: "exhibitions", B: "artifacts", C: "art galleries", D: "works of art" },
      correct: "D",
      explanation: "\"<b>works of art</b>\" (các tác phẩm nghệ thuật) là cụm danh từ bao quát nhất, phù hợp làm danh từ chung cho \"murals and sculptures\"."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Director: \"Is everyone ready? The __________ is ready to begin filming for her next project.\"",
      prompt: "Producer: \"Yes, she is on the set now.\"",
      display: { A: "artist", B: "composer", C: "musician", D: "actress" },
      correct: "D",
      explanation: "Đại từ \"her\" chỉ người phụ nữ, và ngữ cảnh \"begin filming\" (bắt đầu quay phim) phù hợp với \"<b>actress</b>\" (nữ diễn viên)."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Nick: \"Your trip to Hanoi sounded great! Where did the water puppet show take __________?\"",
      prompt: "Minh: \"It was at the famous theater near Hoan Kiem Lake.\"",
      display: { A: "after", B: "care", C: "place", D: "up" },
      correct: "C",
      explanation: "\"take <b>place</b>\" (diễn ra) là cụm động từ cố định, hỏi về địa điểm diễn ra sự kiện."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Peter: \"Why does everyone know about this musical group?\"",
      prompt: "Mary: \"Well, the group is __________ for their albums and tours around the world.\"",
      display: { A: "known-well", B: "well-knows", C: "know-well", D: "well-known" },
      correct: "D",
      explanation: "\"be <b>well-known</b> for + N\" (nổi tiếng vì điều gì) là tính từ ghép cố định."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Mark: \"I think Adele has got a sweet voice.\"",
      prompt: "Luke: \"__________ She is an amazing singer.\"",
      display: { A: "Really? I can't wait to hear.", B: "I couldn't agree more.", C: "I can sing English songs.", D: "I don't like sweet things." },
      correct: "B",
      explanation: "\"<b>I couldn't agree more.</b>\" (tôi hoàn toàn đồng ý) thể hiện sự đồng tình mạnh mẽ, phù hợp với câu tiếp theo khen ngợi ca sĩ."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Alice: \"Many young artists feel anxious before an exhibition.\"",
      prompt: "Bill: \"But they know it's a great chance to make an __________ on others.\"",
      display: { A: "atmosphere", B: "exhibition", C: "impression", D: "talent" },
      correct: "C",
      explanation: "\"make an <b>impression</b> on sb\" (gây ấn tượng với ai) là cụm cố định."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Teacher: \"Art plays an important role in our lives because it brings people together.\"",
      prompt: "Student: \"__________\"",
      display: { A: "Many schools do not have any art classes today.", B: "I don't really like visiting art museums in the afternoon.", C: "Students learn how to draw and paint in science classes.", D: "People share their feelings, culture, and traditions through art." },
      correct: "D",
      explanation: "\"<b>People share their feelings, culture, and traditions through art.</b>\" phù hợp nhất, tiếp nối và mở rộng ý kiến của giáo viên về vai trò của nghệ thuật."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeArtMuseumTrip",
      prompt: "What does the notice say about tomorrow's art museum trip?",
      display: {
        A: "The school gates will close permanently at 8:40.",
        B: "The coach will leave the school yard before 8:30.",
        C: "Students can arrive at the school gates at 9:00.",
        D: "Students should arrive at school before or at 8:40."
      },
      correct: "D",
      explanation: "Thông báo ghi \"Please arrive no later than 8:40\" (vui lòng đến trước 8:40) → \"<b>Students should arrive at school before or at 8:40.</b>\", đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signDoNotTouchArtworks",
      prompt: "What does this sign at the art exhibition mean?",
      display: {
        A: "You can sit down near the sculptures if you feel tired.",
        B: "You should ask the artist for permission to buy the paintings.",
        C: "You are not allowed to feel or touch the objects on display.",
        D: "You must wash your hands before taking photos of the artworks."
      },
      correct: "C",
      explanation: "Biển ghi \"DO NOT TOUCH THE ARTWORKS — Please respect the displays.\" nghĩa là không được chạm vào các vật trưng bày → \"<b>You are not allowed to feel or touch the objects on display.</b>\", đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "artPreferencesCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "but", B: "so", C: "because", D: "although" },
      correct: "C",
      explanation: "\"<b>because</b>\" giới thiệu lý do (thích tranh chân dung vì nó thể hiện khuôn mặt và cảm xúc con người)."
    },
    { id: 18, section: "III", type: "mcq", passage: "artPreferencesCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "her", B: "hers", C: "its", D: "she" },
      correct: "A",
      explanation: "Cần tính từ sở hữu trước danh từ \"family\". <b>her</b> family (gia đình của cô ấy)."
    },
    { id: 19, section: "III", type: "mcq", passage: "artPreferencesCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "up", B: "at", C: "for", D: "after" },
      correct: "C",
      explanation: "\"look <b>for</b> + N\" (tìm kiếm) là cụm cố định — Marco tìm kiếm thêm tác phẩm của người nghệ sĩ đó."
    },
    { id: 20, section: "III", type: "mcq", passage: "artPreferencesCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "natural", B: "common", C: "boring", D: "special" },
      correct: "D",
      explanation: "\"every kind of art is <b>special</b>\" phù hợp với quan điểm tích cực của Marco về nghệ thuật."
    },
    { id: 21, section: "III", type: "mcq", passage: "artPreferencesCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "speaks", B: "tells", C: "talks", D: "says" },
      correct: "D",
      explanation: "\"she <b>says</b> it's creative\" — \"say\" dùng để giới thiệu lời nhận xét/quan điểm trực tiếp."
    },
    { id: 22, section: "III", type: "mcq", passage: "artPreferencesCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "messages", B: "notes", C: "letters", D: "ideas" },
      correct: "A",
      explanation: "\"give strong <b>messages</b> to people\" (truyền tải thông điệp mạnh mẽ đến mọi người) phù hợp với ý nghĩa của nghệ thuật đường phố."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "colourWheelReading",
      prompt: "Dark colours do not usually make people feel happy and energetic.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Dark colours make us feel calm or sad.\" — trái nghĩa với \"happy and energetic\"."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "colourWheelReading",
      prompt: "You can mix yellow and blue to make green.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Green is made by mixing yellow and blue.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "colourWheelReading",
      prompt: "Violet is an example of a primary colour.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"The secondary colours are orange, green, and violet.\" — violet là màu thứ cấp, không phải màu cơ bản."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "colourWheelReading",
      prompt: "There are six intermediate colours on the colour wheel.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"It shows the three primary colours, the three secondary colours, and the six intermediate colours.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "colourWheelReading",
      prompt: "What are black, white, and gray called?",
      display: { A: "Neutral colours", B: "Primary colours", C: "Secondary colours", D: "Intermediate colours" },
      correct: "A",
      explanation: "Bài đọc: \"Black, white, and gray are special colours. They are called neutral colours.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "colourWheelReading",
      prompt: "Why do artists use the colour wheel?",
      display: { A: "To choose which colours to use together", B: "To make new intermediate colours", C: "To paint beautiful pictures of wheels", D: "To change their moods from sad to happy" },
      correct: "A",
      explanation: "Bài đọc: \"Artists use the colour wheel to help them know which colours they want to use together.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The school festival was very _________________ and raised a lot of money.",
      wordGiven: "SUCCEED", accepted: ["successful"], correct: "successful",
      explanation: "Cần tính từ sau \"very\". <b>succeed</b> (v) → <b>successful</b> (adj, thành công)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The natural beauty of the countryside made a deep _________________ on the young artist.",
      wordGiven: "IMPRESS", accepted: ["impression"], correct: "impression",
      explanation: "Cần danh từ sau \"deep\". <b>impress</b> (v) → <b>impression</b> (n, ấn tượng)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The kids are looking at the beautiful _________________ at the school art gallery.",
      wordGiven: "PAINT", accepted: ["paintings"], correct: "paintings",
      explanation: "Cần danh từ số nhiều sau \"beautiful\". <b>paint</b> (v) → <b>paintings</b> (n, những bức tranh)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The Louvre Museum now _________________ more than 380,000 historic objects.",
      wordGiven: "CONTAINER", accepted: ["contains"], correct: "contains",
      explanation: "Cần động từ chia ngôi thứ 3 số ít, thì hiện tại đơn. <b>container</b> (n) → <b>contains</b> (v, chứa)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Regular practice helps young musicians improve their _________________ skills.",
      wordGiven: "PERFORM", accepted: ["performance"], correct: "performance",
      explanation: "Cần danh từ đứng trước \"skills\" tạo thành danh từ ghép. <b>perform</b> (v) → <b>performance</b> (n, biểu diễn)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The teacher gave the student _________________ to go out to capture some photos.",
      wordGiven: "PERMIT", accepted: ["permission"], correct: "permission",
      explanation: "Cần danh từ sau \"gave the student\". <b>permit</b> (v) → <b>permission</b> (n, sự cho phép)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "artistEntry",
      prompt: "The town council created a small market every Sunday to showcase paintings made by _________________.",
      accepted: ["local artists"], correct: "local artists",
      explanation: "Từ điển cho ví dụ \"The gallery is filled with beautiful paintings by <b>local artists</b>.\" — khớp với ngữ cảnh trưng bày tranh của các nghệ sĩ địa phương."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "artistEntry",
      prompt: "The new video game has amazing visual designs because they hired a famous _________________ to lead the team.",
      accepted: ["graphic artist"], correct: "graphic artist",
      explanation: "Từ điển cho ví dụ \"He is a very talented <b>graphic artist</b>.\" — khớp với ngữ cảnh thiết kế hình ảnh cho trò chơi điện tử."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "This portrait is just like that portrait.",
      starter: "This portrait is",
      accepted: ["this portrait is the same as that portrait"],
      correct: "This portrait is the same as that portrait.",
      explanation: "\"be just like + N\" (giống hệt cái gì) có thể viết lại bằng \"<b>be the same as + N</b>\", giữ nguyên nghĩa.<br>→ <i>This portrait is the same as that portrait.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Don Giovanni of Mozart is famous. Moonlight Sonata of Beethoven is famous, too.",
      starter: "Don Giovanni of Mozart is",
      accepted: ["don giovanni of mozart is as famous as moonlight sonata of beethoven"],
      correct: "Don Giovanni of Mozart is as famous as Moonlight Sonata of Beethoven.",
      explanation: "Hai câu \"A is adj. B is adj, too.\" (cùng mức độ) có thể gộp lại bằng so sánh ngang bằng \"<b>A is as + adj + as + B</b>\", giữ nguyên nghĩa.<br>→ <i>Don Giovanni of Mozart is as famous as Moonlight Sonata of Beethoven.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "I don't agree with you because your ideas are different from my ideas.",
      starter: "I don't agree with you because your ideas are",
      accepted: ["i don't agree with you because your ideas are not the same as mine", "i don't agree with you because your ideas are not like mine"],
      correct: "I don't agree with you because your ideas are not the same as mine. (hoặc: not like mine)",
      explanation: "\"be different from + N\" (khác với) có thể viết lại bằng \"<b>be not the same as / not like + đại từ sở hữu</b>\", giữ nguyên nghĩa.<br>→ <i>I don't agree with you because your ideas are not the same as mine.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "The Louvre is the world's largest museum.",
      starter: "No other museum",
      accepted: ["no other museum in the world is as large as the louvre", "no other museum in the world is larger than the louvre"],
      correct: "No other museum in the world is as large as the Louvre. (hoặc: in the world is larger than the Louvre)",
      explanation: "Câu so sánh nhất \"S + is the + adj-est + N\" có thể viết lại bằng \"<b>No other + N + is as + adj + as / is + adj-er than + S</b>\", giữ nguyên nghĩa.<br>→ <i>No other museum in the world is as large as the Louvre.</i>"
    }
  ]
};
