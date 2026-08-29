const TEST = {
  id: "test11",
  grade: "Grade 8 — Global Success",
  unit: "Unit 3: Teenagers",
  title: "Grade 8 · Unit 3: Teenagers · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test11.html",
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
    { id: "VI", title: "Look at the dictionary entry of “pressure”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    stressCloze: "Every teenager feels stressed at times. There are different kinds of troubles, such as academic pressures, family issues, and difficulties with peers. We must say that (17) ________ are the main things that teens have to cope (18) ________ on a daily basis. None of us can avoid stress completely, but psychologists give us some (19) ________ about things we can do to reduce our stress levels.<br><br>Firstly, it's important to exercise regularly and avoid eating (20) ________ food. It is also important to take time out every day to do something (21) ________ makes you happy. It may be listening to your favorite music, talking to a friend, or spending time with a pet. It is always (22) ________ to talk about your problems with others, whether that's a friend, your parents, or a teacher. As the saying goes, \"A problem shared is a problem halved!\"",
    britishTeenReading: "<b>WHAT IS IT LIKE BEING A TEENAGER IN BRITAIN?</b><br><br><b>School</b><br>British teenagers spend most of their time at school. Students in Britain can leave school at sixteen (grade 11). This is also the age when most students take their first important exams, the GCSE (General Certificate of Secondary Education). Most teens take between 5-10 subjects, which means a lot of studying. They are spending more time on homework than teenagers ever before. Forget watching TV, teenagers in Britain now spend 2-3 hours on homework after school.<br><br><b>School uniform</b><br>Visit almost any school in Britain and the first thing you'll notice is the school uniform. Although school uniform has its advantages, when they are 15 or 16, most teenagers are tired of wearing it. When there is more than one school in a town, school uniforms can highlight differences between schools. In London, there are many cases of bullying and fighting between pupils from different schools.<br><br><b>Clothes and looks</b><br>In Britain, some teens judge you by the shirt or trainers you are wearing, as 40% of British teenagers believe it's important to wear designer labels. If you want to follow the crowd, you need to wear trendy labels. Teenagers in Britain wear fashionable trainers, and the more expensive, the better.",
    pressureEntry: {
      word: "pressure", ipa: "/ˈpreʃə(r)/", pos: "noun",
      def: "[uncountable] the act of trying to persuade or force somebody to do something",
      examples: [
        "He backed down <b>under pressure</b> from his colleagues.",
        "The company is <b>under pressure to</b> increase its profits.",
        "Teachers are <b>under constant pressure</b> to improve exam results.",
        "She <b>put pressure on</b> him to sign the contract.",
        "There is <b>growing pressure</b> for changes in the law."
      ]
    }
  },
  images: {
    signTeenlineNotice: "assets/images/sign_teenline_notice.jpg",
    signLibraryClosed: "assets/images/sign_library_closed.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "camel", B: "cattle", C: "paddy", D: "teenager" },
      correct: "D",
      explanation: "\"a\" trong \"camel\" /ˈkæməl/, \"cattle\" /ˈkætl/, \"paddy\" /ˈpædi/ đều phát âm là <b>/æ/</b>. Riêng \"teenager\" /ˈtiːneɪdʒər/ có phần gạch chân phát âm khác → khác biệt, đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "sport", B: "session", C: "user", D: "school" },
      correct: "C",
      explanation: "Theo đáp án gốc, phần gạch chân trong \"user\" /ˈjuːzər/ phát âm khác với \"sport\", \"session\", \"school\" → đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "standard", B: "success", C: "leader", D: "pressure" },
      correct: "B",
      explanation: "\"standard\" /ˈstændərd/, \"leader\" /ˈliːdər/, \"pressure\" /ˈpreʃər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"success\" /səkˈses/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "teenager", B: "character", C: "countryside", D: "enjoyment" },
      correct: "D",
      explanation: "\"teenager\" /ˈtiːneɪdʒər/, \"character\" /ˈkærəktər/, \"countryside\" /ˈkʌntrisaɪd/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"enjoyment\" /ɪnˈdʒɔɪmənt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"I heard that your school just organized a really big event.\"",
      prompt: "Nam: \"Yes! This event is held to commemorate national heroes, ______ it teaches children to respect them.\"",
      display: { A: "so", B: "but", C: "or", D: "and" },
      correct: "D",
      explanation: "\"<b>and</b>\" nối hai ý cùng chiều, bổ sung thêm thông tin (tưởng nhớ anh hùng và dạy trẻ em tôn trọng họ)."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Guide: \"Here is the community hall. You can take a seat here, ______ you can go around and take a look. It's up to you.\"",
      prompt: "Visitor: \"Thank you, I think I'll walk around first.\"",
      display: { A: "and", B: "or", C: "but", D: "so" },
      correct: "B",
      explanation: "\"<b>or</b>\" đưa ra hai lựa chọn thay thế nhau (ngồi lại hoặc đi vòng quanh)."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Lan: \"Why does Ally spend so many hours studying every day?\"",
      prompt: "Hoa: \"She tries to overcome the ______ from her family by getting the best exam results.\"",
      display: { A: "teamwork", B: "media", C: "website", D: "pressure" },
      correct: "D",
      explanation: "\"the <b>pressure</b> from her family\" (áp lực từ gia đình) phù hợp với việc cố gắng đạt điểm cao."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Teacher: \"Are you active in your free time, Minh?\"",
      prompt: "Minh: \"Yes, sir. Most of the students in my class are associated with ______ or sports teams.\"",
      display: { A: "stress", B: "account", C: "school clubs", D: "pressure" },
      correct: "C",
      explanation: "\"associated with <b>school clubs</b> or sports teams\" (tham gia câu lạc bộ trường hoặc đội thể thao) phù hợp với việc năng động trong thời gian rảnh."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Anna: \"Do you think teenagers should spend less time on Facebook?\"",
      prompt: "Ben: \"Well, social media help teens connect with others; _______, they also cause them to feel lonely.\"",
      display: { A: "otherwise", B: "although", C: "however", D: "therefore" },
      correct: "C",
      explanation: "\"<b>however</b>\" thể hiện sự tương phản giữa lợi ích (kết nối) và tác hại (cô đơn) của mạng xã hội."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Mary: \"To meet her parents' ______, Lucy spends five hours practicing the piano every day.\"",
      prompt: "John: \"Wow, she must be exhausted.\"",
      display: { A: "hopeless", B: "wishes", C: "expectations", D: "meeting" },
      correct: "C",
      explanation: "\"meet + parents' <b>expectations</b>\" (đáp ứng kỳ vọng của cha mẹ) là cụm danh từ cố định."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Jane: \"Why do you spend so much time reviewing your vocabulary?\"",
      prompt: "Mark: \"I am learning English ______ I want to get a good job after graduation.\"",
      display: { A: "therefore", B: "so", C: "because", D: "but" },
      correct: "C",
      explanation: "\"<b>because</b>\" giới thiệu lý do (muốn có việc làm tốt) cho hành động học tiếng Anh."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Nam: \"Dad, I've got the first rank in class in English this semester!\"",
      prompt: "Mr. Thanh: \"______! I'm really proud of you.\"",
      display: { A: "Well done", B: "You're welcome", C: "Never mind", D: "Thank you" },
      correct: "A",
      explanation: "\"<b>Well done!</b>\" (Làm tốt lắm!) là lời khen phù hợp cho thành tích học tập."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Peter: \"I hear that our school is organizing a special free event this Friday.\"",
      prompt: "Mary: \"That's right! It's a ______ Well-being Workshop focused on dealing with academic stress.\"",
      display: { A: "Adult", B: "Children", C: "Infant", D: "Teenage" },
      correct: "D",
      explanation: "\"<b>Teenage</b> Well-being Workshop\" (hội thảo sức khỏe tinh thần cho thanh thiếu niên) phù hợp với đối tượng học sinh và chủ đề áp lực học tập."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Lisa: \"Hey, did you hear about the online group for students to share their problems?\"",
      prompt: "David: \"______\"",
      display: {
        A: "Sorry, the school uniform is compulsory in my school.",
        B: "No, social media is always bad for our health.",
        C: "Of course, I need to spend more time studying for the GCSE exam.",
        D: "Yes, teenagers join the forum because they enjoy chatting with other teens."
      },
      correct: "D",
      explanation: "\"<b>Yes, teenagers join the forum because they enjoy chatting with other teens.</b>\" trả lời trực tiếp và hợp lý về nhóm trực tuyến được nhắc đến."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signTeenlineNotice",
      prompt: "What does this sign tell you?",
      display: {
        A: "Teenagers should use nice words and avoid bullying on the forum.",
        B: "You must share your personal account with other people.",
        C: "You are allowed to fight online.",
        D: "Only school pupils can see this notice."
      },
      correct: "A",
      explanation: "Biển ghi \"TEEN LINE FORUM: BE KIND & RESPECT. NO BULLYING OR FIGHTING.\" → thanh thiếu niên nên dùng lời lẽ tử tế và không bắt nạt trên diễn đàn, đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signLibraryClosed",
      prompt: "What does this notice mean?",
      display: {
        A: "The library will permanently shut down from June.",
        B: "Students cannot enter the library on June 7 due to repair work.",
        C: "The library will be open normally on June 7.",
        D: "You can return books late without paying any fee."
      },
      correct: "B",
      explanation: "Biển ghi \"SCHOOL LIBRARY WILL BE CLOSED ON JUNE 7 FOR MAINTENANCE.\" (Thư viện đóng cửa ngày 7/6 để bảo trì) → đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "stressCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "which", B: "these", C: "who", D: "they" },
      correct: "B",
      explanation: "\"We must say that <b>these</b> are the main things\" — \"these\" thay thế cho các vấn đề vừa liệt kê (academic pressures, family issues, difficulties with peers)."
    },
    { id: 18, section: "III", type: "mcq", passage: "stressCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "at", B: "up", C: "with", D: "for" },
      correct: "C",
      explanation: "\"cope <b>with</b>\" (đối phó với) là cụm động từ cố định."
    },
    { id: 19, section: "III", type: "mcq", passage: "stressCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "tips", B: "information", C: "advice", D: "ideas" },
      correct: "A",
      explanation: "\"give us some <b>tips</b>\" (đưa ra vài mẹo) phù hợp với \"some\" (danh từ đếm được, số nhiều)."
    },
    { id: 20, section: "III", type: "mcq", passage: "stressCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "painful", B: "safe", C: "unhealthy", D: "dangerous" },
      correct: "C",
      explanation: "\"avoid eating <b>unhealthy</b> food\" (tránh ăn đồ ăn không lành mạnh) phù hợp với lời khuyên giảm stress."
    },
    { id: 21, section: "III", type: "mcq", passage: "stressCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "who", B: "that", C: "what", D: "where" },
      correct: "B",
      explanation: "\"do something <b>that</b> makes you happy\" — \"that\" thay thế cho vật (something) làm chủ ngữ mệnh đề quan hệ."
    },
    { id: 22, section: "III", type: "mcq", passage: "stressCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "boring", B: "serious", C: "difficult", D: "helpful" },
      correct: "D",
      explanation: "\"It is always <b>helpful</b> to talk about your problems\" (luôn hữu ích khi chia sẻ vấn đề) phù hợp với câu tục ngữ được trích ở cuối đoạn."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "britishTeenReading",
      prompt: "British teenagers currently spend less time doing homework than they did in the past.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"They are spending <b>more</b> time on homework than teenagers ever before.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "britishTeenReading",
      prompt: "The GCSE is the first significant examination that most British students take.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"This is also the age when most students take their first important exams, the GCSE.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "britishTeenReading",
      prompt: "Most 15 or 16-year-old students in Britain enjoy wearing their school uniforms.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"when they are 15 or 16, most teenagers are <b>tired of</b> wearing it.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "britishTeenReading",
      prompt: "In London, school uniforms can sometimes lead to conflicts between students from different schools.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"In London, there are many cases of bullying and fighting between pupils from different schools.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "britishTeenReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "Different aspects of a British teenager's life, including school, uniforms, and fashion.",
        B: "The academic pressure and exam system that British teenagers have to face.",
        C: "The negative effects of school uniforms and bullying in London schools.",
        D: "The reason why British teenagers prefer expensive designer clothing."
      },
      correct: "A",
      explanation: "Bài đọc có 3 phần: School, School uniform, Clothes and looks — mô tả nhiều khía cạnh khác nhau của cuộc sống thanh thiếu niên Anh → đáp án A bao quát toàn bài."
    },
    { id: 28, section: "IV", type: "mcq", passage: "britishTeenReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "British teenagers often spend 2 to 3 hours watching TV after school.",
        B: "Students in Britain are allowed to finish their schooling at the age of sixteen.",
        C: "Less than half of British teenagers think that wearing designer labels is important.",
        D: "Wearing costly and fashionable trainers is popular among British teenagers."
      },
      correct: "A",
      explanation: "Bài đọc nói ngược lại: \"Forget watching TV, teenagers in Britain now spend 2-3 hours <b>on homework</b>\", không phải xem TV → câu A SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Parents should provide more ______________ to help their children overcome exam stress.",
      wordGiven: "encourage", accepted: ["encouragement"], correct: "encouragement",
      explanation: "Cần danh từ làm tân ngữ của \"provide\". <b>encourage</b> (v) → <b>encouragement</b> (n, +ment): sự động viên, khuyến khích."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Spending too much time on social media can be ______________ to a teenager's mental health.",
      wordGiven: "harm", accepted: ["harmful"], correct: "harmful",
      explanation: "Cần tính từ đứng sau \"be\". <b>harm</b> (n/v) → <b>harmful</b> (adj, +ful): có hại."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The psychologist gave a highly ______________ talk about teenage well-being yesterday.",
      wordGiven: "inform", accepted: ["informative"], correct: "informative",
      explanation: "Cần tính từ đứng trước danh từ \"talk\". <b>inform</b> (v) → <b>informative</b> (adj, +ative): giàu thông tin, bổ ích."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Doing exercise regularly helps students improve their concentration and ______________.",
      wordGiven: "enjoy", accepted: ["enjoyment"], correct: "enjoyment",
      explanation: "Cần danh từ song song với \"concentration\". <b>enjoy</b> (v) → <b>enjoyment</b> (n, +ment): niềm vui thích."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Many teenagers find it difficult to ______________ on their lessons when they are worried.",
      wordGiven: "concentration", accepted: ["concentrate"], correct: "concentrate",
      explanation: "Cần động từ nguyên mẫu sau \"to\". <b>concentration</b> (n) → <b>concentrate</b> (v): tập trung."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "______________, more and more teenagers are using the Teen Line forum to share problems.",
      wordGiven: "increase", accepted: ["Increasingly", "increasingly"], correct: "Increasingly",
      explanation: "Cần trạng từ đứng đầu câu bổ nghĩa cho cả câu. <b>increase</b> (v) → <b>increasingly</b> (adv, +ing +ly): ngày càng."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "pressureEntry",
      prompt: "There is ____________________ from the public for the government to lower taxes this year.",
      accepted: ["growing pressure"], correct: "growing pressure",
      explanation: "Từ điển cho ví dụ \"There is <b>growing pressure</b> for changes in the law.\" — khớp với ngữ cảnh áp lực từ công chúng ngày càng tăng."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "pressureEntry",
      prompt: "The manager had to change his mind because he was ____________________ from the team.",
      accepted: ["under pressure"], correct: "under pressure",
      explanation: "Từ điển cho ví dụ \"He backed down <b>under pressure</b> from his colleagues.\" — cấu trúc \"be under pressure from + N\" (chịu áp lực từ ai/điều gì)."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Teenagers should spend less time using their phones.",
      starter: "Teenagers ought",
      accepted: ["teenagers ought to spend less time using their phones"],
      correct: "Teenagers ought to spend less time using their phones.",
      explanation: "\"should + V\" (nên làm gì) có thể diễn đạt lại bằng \"<b>ought to + V</b>\" — cùng mang nghĩa lời khuyên.<br>→ <i>Teenagers ought to spend less time using their phones.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Although Ally faces a lot of academic pressure, she tries her best to study well.",
      starter: "In spite of",
      accepted: [
        "in spite of facing a lot of academic pressure, ally tries her best to study well",
        "in spite of her academic pressure, ally tries her best to study well"
      ],
      correct: "In spite of facing a lot of academic pressure, Ally tries her best to study well. (hoặc: In spite of her academic pressure, Ally tries her best to study well.)",
      explanation: "\"Although + mệnh đề\" chuyển thành \"<b>In spite of + N/V-ing</b>\" — cùng diễn tả sự tương phản.<br>→ <i>In spite of facing a lot of academic pressure, Ally tries her best to study well.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Social networking is more popular than any other technology among teenagers nowadays.",
      starter: "No other technology",
      accepted: [
        "no other technology among teenagers nowadays is as popular as social networking",
        "no other technology among teenagers nowadays is more popular than social networking"
      ],
      correct: "No other technology among teenagers nowadays is as popular as social networking. (hoặc: ... is more popular than social networking.)",
      explanation: "So sánh hơn \"more popular than any other\" chuyển thành so sánh nhất kiểu phủ định \"<b>No other ... is as popular as</b>\" — cùng khẳng định social networking phổ biến nhất.<br>→ <i>No other technology among teenagers nowadays is as popular as social networking.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "The school finally produced a good solution to help students deal with stress.",
      starter: "The school finally came",
      accepted: ["the school finally came up with a good solution to help students deal with stress"],
      correct: "The school finally came up with a good solution to help students deal with stress.",
      explanation: "\"produce a solution\" (đưa ra giải pháp) có thể diễn đạt lại bằng cụm động từ \"<b>come up with</b>\" (nghĩ ra, đưa ra) — cùng nghĩa.<br>→ <i>The school finally came up with a good solution to help students deal with stress.</i>"
    }
  ]
};
