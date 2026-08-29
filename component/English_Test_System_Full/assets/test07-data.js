const TEST = {
  id: "test07",
  grade: "Grade 8 — Global Success",
  unit: "Unit 1: Leisure time",
  title: "Grade 8 · Unit 1: Leisure time · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test07.html",
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
    { id: "VI", title: "Look at the dictionary entry of “leisure”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    hobbyCloze: "There are many reasons why it is important to have a hobby. A hobby is a regular activity that is done for enjoyment, typically during one's (17) ________ time. It will give you pleasure and help you relax after long hours of hard work. For example, many old people enjoy gardening. They grow a lot of trees and vegetables, so they can even sell them for some money.<br><br>In addition, a hobby can help you (18) ________ with other people. If you like (19) ________ stamps, you can join a stamp club to share your albums with other collectors. If your hobby is carving eggshells, you can give your beautiful products to your friends (20) ________ unique gifts. In this busy daily schedule, we all get so caught up in our routines that we sometimes forget to give out time for ourselves. Indulging in a hobby is actually good for a sound health. It provides us with a time of leisure where we can do something that brings us immense (21) ________. Therefore, everyone (22) ________ have at least one hobby to balance their life.",
    socialNetworkReading: "One of the most obvious negative aspects of social networking is losing face-to-face contact with other people. Teens are sitting around with their phones in their hands all day long, tapping messages onto screens instead of communicating with real people. Many teenagers feel more comfortable with virtual friends than with real ones. The majority think that it is easier to chat on the Internet because they lack communication skills.<br><br>It is also true that parents often have no knowledge about what their kids do with their phones or computers. Experts say that while kids are plugged in to social media, only about 40% of parents are involved themselves. And because parents don't know the full picture, they don't know how to deal with a teenager's potential overuse of social media and might not even be aware that a problem exists. Therefore, social networking can be much more immediately engaging with the teenager's life than parents are, and this fact makes virtual communication feel more \"real\" than face-to-face communication.",
    leisureEntry: {
      word: "leisure", ipa: "/ˈliːʒər/", pos: "noun",
      def: "The time when you are not working or studying and can relax and do things that you enjoy.",
      examples: [
        "<b>Leisure activities</b> such as cycling or gardening help reduce daily stress.",
        "Most people only have a little <b>leisure time</b> during the busy workweek.",
        "The new community center offers excellent <b>leisure facilities</b> for sports and hobbies."
      ]
    }
  },
  images: {
    signChildrenRide: "assets/images/sign_children_ride.jpg",
    signChildrenCrossing: "assets/images/sign_children_crossing.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "bracelets", B: "outdoors", C: "friends", D: "puzzles" },
      correct: "A",
      explanation: "Đuôi \"s\" trong \"outdoors\" /aʊtˈdɔːrz/, \"friends\" /frendz/, \"puzzles\" /ˈpʌzlz/ đều phát âm là <b>/z/</b>. Riêng \"bracelets\" /ˈbreɪslɪts/ có đuôi \"s\" phát âm là <b>/s/</b> (do đứng sau âm vô thanh \"t\") → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "resort", B: "interested", C: "detest", D: "message" },
      correct: "A",
      explanation: "Chữ \"s\" trong \"interested\" /ˈɪntrəstɪd/, \"detest\" /dɪˈtest/, \"message\" /ˈmesɪdʒ/ đều phát âm là <b>/s/</b>. Riêng \"resort\" /rɪˈzɔːrt/ có \"s\" phát âm là <b>/z/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "listen", B: "prefer", C: "adore", D: "enjoy" },
      correct: "A",
      explanation: "\"prefer\" /prɪˈfɜːr/, \"adore\" /əˈdɔːr/, \"enjoy\" /ɪnˈdʒɔɪ/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"listen\" /ˈlɪsn/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án A."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "photography", B: "environment", C: "biography", D: "television" },
      correct: "D",
      explanation: "\"photography\" /fəˈtɑːɡrəfi/, \"environment\" /ɪnˈvaɪrənmənt/, \"biography\" /baɪˈɑːɡrəfi/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"television\" /ˈtelɪvɪʒn/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Minh: \"What is Mai doing in her bedroom right now?\"",
      prompt: "Nam: \"She ______ to music. Pop music is her absolute favorite in her free time.\"",
      display: { A: "talks", B: "hears", C: "is listening", D: "plays" },
      correct: "C",
      explanation: "Hành động đang diễn ra ngay tại thời điểm nói (\"right now\") → dùng <b>thì hiện tại tiếp diễn</b>: <b>is listening</b>. \"listen to music\" cũng là cụm cố định phù hợp hơn \"hear\" (nghe thấy một cách bị động)."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Tom: \"Why are you holding your phone all the time?\"",
      prompt: "Jerry: \"I like to ______ TikTok to watch short clips whenever I have some leisure time.\"",
      display: { A: "message", B: "surf", C: "knit", D: "relax" },
      correct: "B",
      explanation: "\"<b>surf</b> TikTok/the Internet\" (lướt xem TikTok/mạng) là cụm động từ cố định."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Lan: \"Minh looks quite tired tonight. He has so much to study.\"",
      prompt: "Hoa: \"Yes, but he is a hard-working boy. He doesn't mind ______ a lot of homework.\"",
      display: { A: "doing", B: "making", C: "reading", D: "seeing" },
      correct: "A",
      explanation: "\"mind + <b>V-ing</b>\" (bận tâm/phiền khi làm gì) — và \"do homework\" (làm bài tập) là cụm cố định: <b>doing</b>."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Quan: \"Do you fancy ______ around the West Lake with me this Sunday morning?\"",
      prompt: "Long: \"That sounds amazing! I'll get my bicycle ready.\"",
      display: { A: "staying", B: "moving", C: "going", D: "having" },
      correct: "C",
      explanation: "\"fancy + <b>V-ing</b>\" (thích/muốn làm gì) và \"go around\" (đi vòng quanh) phù hợp với ngữ cảnh đạp xe quanh Hồ Tây: <b>going</b>."
    },
    { id: 9, section: "I", type: "mcq",
      context: "An: \"Look at that girl over there! Her dress looks so ______! I want to buy it.\"",
      prompt: "Binh: \"Wow, it really is beautiful and elegant.\"",
      display: { A: "noisy", B: "crazy", C: "funny", D: "fancy" },
      correct: "D",
      explanation: "\"<b>fancy</b>\" (sang trọng, cầu kỳ, đẹp mắt) phù hợp với lời khen tiếp theo \"beautiful and elegant\"."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Vy: \"Why are you and Jane such close friends?\"",
      prompt: "Chi: \"About favorite leisure activities, she and I share many things in ______.\"",
      display: { A: "common", B: "base", C: "general", D: "similarity" },
      correct: "A",
      explanation: "\"have things in <b>common</b>\" (có những điểm chung) là cụm cố định."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Nam: \"Who is that woman speaking on television?\"",
      prompt: "Ba: \"She's a famous ______ known for her endless efforts to help poor people.\"",
      display: { A: "activist", B: "activity", C: "active", D: "activism" },
      correct: "A",
      explanation: "Cần danh từ chỉ người đứng sau \"a famous\" → <b>activist</b> (nhà hoạt động xã hội)."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Nga: \"Would you like to hang out with me this afternoon?\"",
      prompt: "Hoa: \"______! Let's go to our favorite coffee shop.\"",
      display: { A: "Yes, I'd like", B: "No, I don't like", C: "Never mind", D: "Yes, I'd love to" },
      correct: "D",
      explanation: "\"<b>Yes, I'd love to</b>\" là cách đáp lại lời mời một cách hoàn chỉnh và tự nhiên (\"I'd like\" bị thiếu tân ngữ/động từ theo sau nên chưa trọn nghĩa)."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Lucas: \"You should not spend too much time surfing the Internet, Tony.\"",
      prompt: "Tony: \"______\"",
      display: { A: "Great! Let's do it together.", B: "Thanks for your advice. I'll reduce my screen time.", C: "Yes, I do it very often.", D: "It's none of your business." },
      correct: "B",
      explanation: "\"<b>Thanks for your advice. I'll reduce my screen time.</b>\" là lời đáp phù hợp, thể hiện sự tiếp thu lời khuyên của Lucas."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Father: \"Your sister spends all her free time playing computer games.\"",
      prompt: "Mother: \"______\"",
      display: { A: "She is studying hard for her exams.", B: "She doesn't like computers at all.", C: "I know. We should encourage her to do more outdoor activities.", D: "Computer games are cheap to buy nowadays." },
      correct: "C",
      explanation: "\"<b>I know. We should encourage her to do more outdoor activities.</b>\" là phản hồi hợp lý nhất, thể hiện sự đồng tình với mối lo ngại của người cha và đề xuất giải pháp."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signChildrenRide",
      prompt: "What does this notice tell you?",
      display: {
        A: "Children in groups of 5 must have an adult with them.",
        B: "Adults are not allowed to join this ride with children.",
        C: "There are no more than 5 adults on this ride.",
        D: "Children less than 5 years old cannot go on this ride by themselves."
      },
      correct: "D",
      explanation: "Thông báo ghi \"CHILDREN UNDER 5 YEARS OLD ARE NOT ALLOWED ON THIS RIDE ALONE\" (trẻ dưới 5 tuổi không được đi trò chơi này một mình) → trẻ dưới 5 tuổi không được đi một mình, phải có người lớn đi cùng, đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signChildrenCrossing",
      prompt: "What does this traffic sign mean?",
      display: {
        A: "Children are safely playing in the playground nearby.",
        B: "Children are not allowed to cross the road without their parents.",
        C: "There is a school ahead and drivers must completely stop their vehicles here.",
        D: "Drivers should reduce their speed because children might be crossing the road."
      },
      correct: "D",
      explanation: "Biển báo ghi \"SLOW — CHILDREN CROSSING\" (Đi chậm — Trẻ em qua đường) → tài xế nên giảm tốc độ vì có thể có trẻ em đang qua đường, đáp án D."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "busy", B: "free", C: "work", D: "study" },
      correct: "B",
      explanation: "\"one's <b>free</b> time\" (thời gian rảnh) là cụm cố định, phù hợp với định nghĩa về sở thích (hobby)."
    },
    { id: 18, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "connect", B: "compete", C: "argue", D: "separate" },
      correct: "A",
      explanation: "\"help you <b>connect</b> with other people\" (giúp bạn kết nối với người khác) phù hợp với ý nghĩa tích cực của việc có sở thích chung."
    },
    { id: 19, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "playing", B: "selling", C: "doing", D: "collecting" },
      correct: "D",
      explanation: "\"like <b>collecting</b> stamps\" (thích sưu tầm tem) khớp với câu sau nói về việc tham gia câu lạc bộ sưu tầm."
    },
    { id: 20, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "for", B: "with", C: "as", D: "in" },
      correct: "C",
      explanation: "\"give sth to sb <b>as</b> unique gifts\" (tặng cái gì cho ai như một món quà độc đáo) — \"as\" giới thiệu vai trò/tư cách của vật được tặng."
    },
    { id: 21, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "sadness", B: "happiness", C: "stress", D: "anger" },
      correct: "B",
      explanation: "\"brings us immense <b>happiness</b>\" (mang lại niềm hạnh phúc to lớn) phù hợp với ý nghĩa tích cực của đoạn văn về lợi ích của sở thích."
    },
    { id: 22, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "should", B: "can't", C: "needn't", D: "shouldn't" },
      correct: "A",
      explanation: "\"everyone <b>should</b> have at least one hobby\" (mọi người nên có ít nhất một sở thích) — lời khuyên nên làm gì, phù hợp với thông điệp tổng kết của đoạn văn."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "socialNetworkReading",
      prompt: "Many teenagers prefer interacting with virtual friends because they find online communication easier.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Many teenagers feel more comfortable with virtual friends than with real ones. The majority think that it is <b>easier to chat on the Internet</b>...\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "socialNetworkReading",
      prompt: "According to the passage, teens lose face-to-face contact because they don't have mobile phones.",
      correct: "False",
      explanation: "Sai. Bài đọc nói ngược lại: teen mất kết nối trực tiếp VÌ họ luôn cầm điện thoại (\"sitting around with their phones in their hands all day long\"), không phải vì không có điện thoại."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "socialNetworkReading",
      prompt: "More than half of all parents are actively involved in supervising their children's social media use.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"only about <b>40%</b> of parents are involved themselves\" — dưới một nửa, không phải hơn một nửa."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "socialNetworkReading",
      prompt: "Virtual communication can feel more real to teenagers than talking to people in person.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"...this fact makes virtual communication feel more <b>\"real\"</b> than face-to-face communication.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "socialNetworkReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The negative impacts of social networks on teenagers' real-life contact and the lack of parental awareness.",
        B: "The benefits of using social media to improve teenagers' communication skills.",
        C: "The reasons why modern parents prefer virtual communication to face-to-face contact.",
        D: "The statistical evidence showing how technology helps teenagers connect with their families."
      },
      correct: "A",
      explanation: "Bài đọc nói về việc mạng xã hội khiến teen mất kết nối trực tiếp (đoạn 1) và việc phụ huynh thiếu hiểu biết/giám sát (đoạn 2) → đáp án A bao quát cả hai ý."
    },
    { id: 28, section: "IV", type: "mcq", passage: "socialNetworkReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Parents always know how to handle their children's excessive use of social media.",
        B: "Many teenagers feel more comfortable with online friends than real-life friends.",
        C: "A large number of teenagers lack interpersonal communication skills.",
        D: "Only about 40% of parents are involved while their children use social media."
      },
      correct: "A",
      explanation: "Bài đọc nói phụ huynh \"don't know how to deal with a teenager's potential overuse of social media and might not even be aware that a problem exists\" → câu A nói phụ huynh LUÔN biết cách xử lý là SAI so với bài đọc."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Playing board games with family members is very ______________.",
      wordGiven: "interest", accepted: ["interesting"], correct: "interesting",
      explanation: "Cần tính từ đứng sau \"very\". <b>interest</b> (v/n) → <b>interesting</b> (adj, +ing): thú vị."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "My sister likes doing DIY because she wants to make her bedroom more ______________.",
      wordGiven: "color", accepted: ["colorful", "colourful"], correct: "colorful",
      explanation: "Cần tính từ đứng sau \"more\". <b>color</b> (n) → <b>colorful</b> (adj, +ful): đầy màu sắc."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The fair was successfully organized, and it brought a lot of ______________ to the students.",
      wordGiven: "please", accepted: ["pleasure"], correct: "pleasure",
      explanation: "Cần danh từ làm tân ngữ của \"brought a lot of\". <b>please</b> (v) → <b>pleasure</b> (n): niềm vui, sự thích thú."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Virtual communication can be harmful because it reduces ______________ contact.",
      wordGiven: "face", accepted: ["face-to-face"], correct: "face-to-face",
      explanation: "Cần tính từ ghép đứng trước danh từ \"contact\". <b>face</b> (n) → <b>face-to-face</b> (adj ghép): trực tiếp, mặt đối mặt."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Parents should be ______________ in guiding their children to use social media safely.",
      wordGiven: "involve", accepted: ["involved"], correct: "involved",
      explanation: "Cần tính từ đứng sau \"be\". <b>involve</b> (v) → <b>involved</b> (adj, +ed): tham gia, có liên quan."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The lack of social skills makes many teenagers feel ______________ when talking to strangers.",
      wordGiven: "comfort", accepted: ["uncomfortable"], correct: "uncomfortable",
      explanation: "Cần tính từ đứng sau \"feel\". <b>comfort</b> (n) → <b>uncomfortable</b> (adj, un- + -able): không thoải mái."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "leisureEntry",
      prompt: "The local government is building new ____________________ like swimming pools and parks for the residents.",
      accepted: ["leisure facilities"], correct: "leisure facilities",
      explanation: "Từ điển cho ví dụ \"The new community center offers excellent <b>leisure facilities</b> for sports and hobbies.\" — rất khớp với việc xây bể bơi và công viên cho người dân."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "leisureEntry",
      prompt: "Playing sports and collecting stamps are healthy ____________________ that help teenagers relax after school.",
      accepted: ["leisure activities"], correct: "leisure activities",
      explanation: "Từ điển cho ví dụ \"<b>Leisure activities</b> such as cycling or gardening help reduce daily stress.\" — khớp với việc chơi thể thao và sưu tầm tem là những hoạt động giải trí lành mạnh."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Playing board games is very interesting.",
      starter: "It is very",
      accepted: ["it is very interesting to play board games"],
      correct: "It is very interesting to play board games.",
      explanation: "Chủ ngữ là danh động từ (\"Playing board games\") có thể chuyển thành \"<b>It is + adj + to V</b>\" — cùng diễn tả nhận xét về một hành động.<br>→ <i>It is very interesting to play board games.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "My parents insist on my learning another language.",
      starter: "My parents want",
      accepted: ["my parents want me to learn another language"],
      correct: "My parents want me to learn another language.",
      explanation: "\"insist on sb's V-ing\" (khăng khăng đòi ai làm gì) có thể chuyển thành \"<b>want sb to V</b>\" (muốn ai làm gì) — cùng diễn tả mong muốn/yêu cầu.<br>→ <i>My parents want me to learn another language.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "My brother usually spends his free time playing computer games.",
      starter: "My brother usually takes",
      accepted: [
        "my brother usually takes up his free time playing computer games",
        "my brother usually takes time to play computer games"
      ],
      correct: "My brother usually takes up his free time playing computer games. / My brother usually takes time to play computer games.",
      explanation: "\"spend + time + V-ing\" (dành thời gian làm gì) có thể chuyển thành \"<b>take up + time + V-ing</b>\" hoặc \"<b>take time to V</b>\" — cùng diễn tả việc dùng thời gian vào một hoạt động.<br>→ <i>My brother usually takes up his free time playing computer games.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "You should not spend too much time surfing the Internet.",
      starter: "You had better",
      accepted: ["you had better not spend too much time surfing the internet"],
      correct: "You had better not spend too much time surfing the Internet.",
      explanation: "\"shouldn't + V\" (không nên làm gì) có thể chuyển thành \"<b>had better not + V</b>\" — cùng diễn tả lời khuyên không nên làm gì.<br>→ <i>You had better not spend too much time surfing the Internet.</i>"
    }
  ]
};
