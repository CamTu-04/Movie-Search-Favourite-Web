const movies = [
    {
        id: 1,
        title: "Nguyệt Lân Y Kỷ",
        englishTitle: "Fate Chooses You",
        description: "Một chuyện tình huyền huyễn giữa định mệnh, chiến tranh và sự hy sinh.",
        image: "https://static2.vieon.vn/vieplay-image/carousel_web_v4_ntc/2026/04/17/m6e5iydo_1920x1080-carousel-02_1920_1080.jpeg",
        year: 2026,
        rating: 9.2,
        genre: "Cổ Trang"
    },
    {
        id: 2,
        title: "Khom lưng",
        englishTitle: "Bowing",
        description: "Một câu chuyện cảm động về tình yêu và sự hy sinh trong hoàn cảnh khó khăn.",
        image: "assets/nen2.jpg",   
        year: 2025,
        rating: 8.7,
        genre: "Tình Cảm"
    },
    {
        id: 3,
        title: "Nữ Hoàng Nước Mắt",
        englishTitle: "The Queen of Tears",
        description: "Một câu chuyện tình yêu đầy cảm động giữa một cô gái trẻ và một chàng trai bí ẩn, nơi ranh giới giữa thực và ảo trở nên mờ nhạt.",
        image: "assets/nen3.webp",
        year: 2025,
        rating: 8.9,
        genre: "Tình Cảm"
    },
    {
        id: 4,
        title: "Cuộc Chiến Thượng Lưu",
        englishTitle: "High Class War",
        description: "Một câu chuyện hành động về một nhóm người phải đối mặt với những thử thách và nguy hiểm khi một cuộc chiến bất ngờ nổ ra trong thành phố.",
        image: "assets/nen4.jpg",
        year: 2023,
        rating: 8.6,
        genre: "Hành Động"
    }
]

const moviesChina =[
    {
        id: "china-1",
        title: "Mê Hoặc",
        englishTitle: "Enchantment",
        description: "Một câu chuyện tình yêu đầy mê hoặc giữa một cô gái trẻ và một chàng trai bí ẩn, nơi ranh giới giữa thực và ảo trở nên mờ nhạt.",
        image: "assets/movie1.jpg",
        year: 2026,
        rating: 8.5,
        genre: "Tình Cảm"
    },
    {
        id: "china-2",
        title: "Cung Nữ Này Thật Ngu Ngốc",
        englishTitle: "This Palace Maid is Really Stupid",
        description: "Một câu chuyện hài hước về một cung nữ ngốc nghếch nhưng có trái tim ấm áp, người vô tình trở thành người hầu cận của một hoàng tử lạnh lùng và bí ẩn.",
        image: "assets/movie2.webp",
        year: 2025,
        rating: 8.0,
        genre: "Hài Hước"
    },
    {
        id: "china-3",
        title: "Ánh Sáng Trong Đêm",
        englishTitle: "Light in the Night",
        description: "Một câu chuyện cảm động về tình yêu và sự hy sinh trong hoàn cảnh khó khăn.",
        image: "assets/movie3.webp",
        year: 2026,
        rating: 8.2,
        genre: "Tình Cảm"
    },
    {
        id: "china-4",
        title: "Pháo Hoa",
        englishTitle: "Fireworks",
        description: "Một câu chuyện hài hước về một nhóm bạn trẻ cùng nhau tổ chức một buổi lễ pháo hoa đầy ắp niềm vui và bất ngờ.",
        image: "assets/movie4.webp",
        year: 2026,
        rating: 7.8,
        genre: "Hài Hước"
    },
    {
        id: "china-5",
        title: "Có Một Lá Thư",
        englishTitle: "There is a Letter",
        description: "Một câu chuyện tình yêu đầy cảm động giữa một cô gái trẻ và một chàng trai bí ẩn, nơi ranh giới giữa thực và ảo trở nên mờ nhạt.",
        image: "assets/movie5.webp",    
        year: 2025,
        rating: 8.3,
        genre: "Tình Cảm"
    },
    {
        id: "china-6",
        title: "Lật Ngược Cuộc Đời",
        englishTitle: "Turn Your Life Upside Down",
        description: "Một câu chuyện hài hước về một người đàn ông bình thường bỗng nhiên bị lật ngược cuộc đời khi phát hiện ra mình có khả năng đặc biệt.",
        image: "assets/movie6.webp",
        year: 2026,
        rating: 7.9,
        genre: "Hài Hước"
    }
]

const moviesKorea = [
    {
        id: "korea-1",
        title: "Bù Nhìn Bóng Đêm",
        englishTitle: "The Night Puppet",
        description: "Một câu chuyện kinh dị về một con bù nhìn ma quái xuất hiện vào ban đêm, mang theo những bí ẩn và nguy hiểm.",    
        image: "assets/k1.jpg",
        year: 2026,
        rating: 8.7,
        genre: "Kinh Dị"
    },
    {
        id: "korea-2",
        title: "Các Tế Bào Của Yumi",
        englishTitle: "Yumi's Cells",
        description: "Một câu chuyện hài hước về cuộc sống hàng ngày của Yumi, được kể qua góc nhìn của các tế bào trong cơ thể cô.",    
        image: "assets/k2.jpg",
        year: 2025,
        rating: 8.4,
        genre: "Hài Hước"
    },
    {
        id: "korea-3",
        title: "Bác Sĩ Shin",
        englishTitle: "Doctor Shin",
        description: "Một câu chuyện cảm động về một bác sĩ tận tâm và những bệnh nhân của anh, nơi tình yêu và sự hy sinh được đặt lên hàng đầu.",    
        image: "assets/k3.jpg",
        year: 2026,
        rating: 8.6,
        genre: "Tình Cảm"
    },
    {
        id: "korea-4",
        title: "Cuộc Chiến Trong Chúng Ta",
        englishTitle: "The War Within Us",
        description: "Một câu chuyện hành động về một nhóm người phải đối mặt với những thử thách và nguy hiểm khi một cuộc chiến bất ngờ nổ ra trong thành phố.",    
        image: "assets/k4.webp",
        year: 2026, 
        rating: 8.3,
        genre: "Hành Động"
    },
    {
        id: "korea-5",
        title: "Thanh Tra Bí Mật",
        englishTitle: "Secret Agent",
        description: "Một câu chuyện hành động về một thám tử bí mật phải giải quyết một vụ án phức tạp trong môi trường chính trị đầy rẫy âm mưu.",    
        image: "assets/k5.png",
        year: 2026,
        rating: 8.5,
        genre: "Hành Động"
    },
    {
        id: "korea-6",
        title: "Người Đàn Ông Đầu Tiên",
        englishTitle: "The First Man",
        description: "Một câu chuyện cảm động về một người đàn ông bình thường bỗng nhiên trở thành người hùng khi anh ta phải đối mặt với những thử thách và nguy hiểm để bảo vệ gia đình và cộng đồng của mình.",    
        image: "assets/k6.jpg",
        year: 2026,
        rating: 8.4,
        genre: "Tình Cảm"
    }
]

const moviesNew = [
    {
        id: "new-1",
        title: "Điệp Ảnh Truy Tung",
        englishTitle: "The Spy Hunter",
        description: "Một câu chuyện hành động về một điệp viên tài ba phải đối mặt với những thử thách và nguy hiểm khi anh ta phải giải quyết một vụ án phức tạp trong môi trường chính trị đầy rẫy âm mưu.",    
        image: "assets/n1.jpg",
        year: 2026,
        rating: 8.2,
        genre: "Hành Động"
    },
    {
        id: "new-2",
        title: "Tình Người Duyên Ma",
        englishTitle: "Love Between Humans and Ghosts",
        description: "Một câu chuyện tình cảm kỳ ảo về sự kết nối giữa một người sống và một linh hồn, nơi ranh giới giữa thế giới này và thế giới bên kia trở nên mờ nhạt.",
        image: "assets/n2.jpg",
        year: 2026,
        rating: 8.0,
        genre: "Tình Cảm"
    },
    {
        id: "new-3",
        title: "5 centimet Trên Giây",
        englishTitle: "5 Centimeters Per Second",
        description: "Một câu chuyện tình yêu đầy cảm động về hai người trẻ tuổi phải đối mặt với những thử thách và khoảng cách khi họ cố gắng duy trì mối quan hệ của mình qua thời gian và không gian.",
        image: "assets/n3.jpg",
        year: 2026,
        rating: 8.1,
        genre: "Tình Cảm"
    },
    {
        id: "new-4",
        title: "Trò Chơi Của Quỷ",
        englishTitle: "The Devil's Game",
        description: "Một câu chuyện kinh dị về một trò chơi ma quái được tổ chức trong một ngôi nhà cổ, nơi những người tham gia phải đối mặt với những thử thách kinh hoàng để sống sót.",
        image: "assets/n4.jpg",
        year: 2026,
        rating: 8.3,
        genre: "Kinh Dị"
    },
    {
        id: "new-5",
        title: "Tình Đầu Khó Nói",
        englishTitle: "First Love is Hard to Say",
        description: "Một câu chuyện tình yêu ngọt ngào và cảm động về những khó khăn và thử thách mà hai người trẻ tuổi phải đối mặt khi họ cố gắng duy trì mối quan hệ của mình qua thời gian và không gian.",
        image: "assets/n5.jpg",
        year: 2026,
        rating: 8.0,
        genre: "Tình Cảm"
    },
    {
        id: "new-6",
        title: "Humint",
        englishTitle: "Humint",
        description: "Một câu chuyện hành động về một điệp viên tài ba phải đối mặt với những thử thách và nguy hiểm khi anh ta phải giải quyết một vụ án phức tạp trong môi trường chính trị đầy rẫy âm mưu.",    
        image: "assets/n6.jpg",
        year: 2026,
        rating: 8.2,
        genre: "Hành Động"
    }
]