let choice;
const playlists = [
  {
    id: 1,
    title: "SHAPE YOU",
    artist: "MONKEY",
    genre:"POP",
    duration: "3:53",
  },
  {
    id: 2,
    title: "SEE TINH",
    artist: "HOÀNG THÙY LINH",
    genre:"BALLAD",
    duration: "3:53",
  },
  {
    id: 3,
    title: "ĐOM ĐỚM",
    artist: "J97",
    genre:"RAP",
    duration: "3:53",
  },
  {
    id: 4,
    title: "PEACHES",
    artist: "JUSTIN",
    genre:"POP",
    duration: "3:53",
  },
  {
    id: 5,
    title: "IF YOU",
    artist: "BIGBANG",
    genre:"ROCK",
    duration: "1:53",
  }
]
function addMusic() {
  let maxId = 0;
  for (let i = 0; i < playlists.length; i++) {
    if (playlists[i].id > maxId) {
      maxId = playlists[i].id;
    }
  }
  let id = maxId + 1;
  let title = prompt("Nhập tên bài hát").toLocaleUpperCase();
  let artist = prompt("Nhập tên ca sĩ").toLocaleUpperCase();
  let genre = prompt("Nhập thể loại(pop,balad,rap,rock,electromic,indie").toLocaleUpperCase();
  if (genre !== "POP" && genre !== "BALAD" && genre !== "RAP" && genre !== "ROCK" && genre !== "ELECTROMIC" && genre !== "INDIE") {
    alert("Thể loại không hợp lệ!!! Vui lòng nhập lại");
    return;
  }
  let duration = prompt("Nhập thời lượng");
  playlists.push({ id, title, artist, genre, duration })
  alert(`Đã thêm thành công!!!\n
    Bài hát ${title} tác giả ${artist} thể loại ${genre} với thời lượng ${duration} vào playlist`)
}
function deleteMusic() {
  let nameDelete = prompt("Nhập tên bài hát muốn xóa").toLocaleUpperCase();
  let indexDelete = playlists.findIndex((item) => item.title === nameDelete);
  let confirmDelete = confirm("Bạn có chắc muốn xóa không?");
  if (indexDelete !== -1) {
    if (confirmDelete) {
      playlists.splice(indexDelete, 1);
      alert("Xóa bài hát thành công");
    } else {
      alert("Hủy xóa bài hát");
    }
  } else {
    alert("Không tìm thấy bài hát có tên này.");
  }
}
function displayMusic() {
  if (playlists.length === 0) {
    alert("Playlist hiện đang trống.");
    return;
  }
  let msg="========= DANH SÁCH BÀI HÁT ==========\n";
  playlists.forEach((song) => {
    msg += `ID: ${song.id}| Title: ${song.title}| Artist: ${song.artist}| Genre: ${song.genre}| Duration: ${song.duration}\n`;
    msg +=`-----------------------------------------------------------------------\n`
  });
  alert(msg);
}
function updateMusic() {
  let nameUpdate = prompt("Nhập tên bài hát muốn cập nhật").toLocaleUpperCase();
  let indexUpdate = playlists.findIndex((item) => item.title === nameUpdate);
  let newDuration = prompt("Nhập thời lượng mới")
  let newGenree = prompt("Nhập thể loại mới").toLocaleUpperCase();
  if (indexUpdate !== -1) {
    playlists[indexUpdate].duration = newDuration;
    playlists[indexUpdate].genre = newGenree;
    alert(`Cập nhật thành công!!!\n
      Bài hát ${playlists[indexUpdate].title} Tác giả ${playlists[indexUpdate].artist} thể loại ${newGenree} với thời lượng ${newDuration} vào playlist`);
  } else {
    alert("Không tìm thấy bài hát có tên này.");
  }
}
function searchMusic() {
  let nameSearch = prompt("Nhập tên bài hát hoặc tác giả muốn tìm kiếm").toLocaleUpperCase();
  let indexSearch = playlists.findIndex((item) => item.title === nameSearch || item.artist === nameSearch);
  if (indexSearch !== -1) {
    alert(`Bài hát ${playlists[indexSearch].title} Tác giả ${playlists[indexSearch].artist} thể loại ${playlists[indexSearch].genre} với thời lượng ${playlists[indexSearch].duration}`);
  } else {
    alert("Không tìm thấy bài hát có tên này.");
  }
}
function filterMusic() {
  let genreFilter = prompt("Nhập thể loại muốn lọc").toLocaleUpperCase();
  if (genreFilter !== "POP" && genreFilter !== "BALAD" && genreFilter !== "RAP" && genreFilter !== "ROCK" && genreFilter !== "ELECTROMIC" && genreFilter !== "INDIE") {
    alert("Thể loại không hợp lệ!!! Vui lòng nhập lại");
    return;
  }
  let filteredSongs = playlists.filter((song) => song.genre === genreFilter);
  if (filteredSongs.length === 0) {
    alert(`Hiện tại playlist chưa có bài hát có thể loại ${genreFilter}`);
    return;
  }
  let msg="========= DANH SÁCH BÀI HÁT ==========\n";
  filteredSongs.forEach((song) => {
    msg += `ID: ${song.id}| Title: ${song.title}| Artist: ${song.artist}| Genre: ${song.genre}| Duration: ${song.duration}\n`;
    msg +=`-----------------------------------------------------------------------\n`
  });
  alert(msg); 
}
do {
  choice = +prompt(`=========== MENU PLAYLIST=============
1.Thêm bài hát
2.Xóa bài hát
3.Hiển thị danh sách bài hát
4.Cập nhật thông tin bài hát
5.Tìm kiếm bài hát
6.Lọc theo thể loại
7.Tính tổng thời lượng playlist
8.Sắp xếp playlist theo thời lượng
9.Xác định trend nhạc
0.Thoát
===================================
  `)
  switch (choice) {
    case 1:
      addMusic();;
      break;
    case 2:
      deleteMusic();
      break;
    case 3:
      displayMusic();
      break;
    case 4:
      updateMusic();
      break;
    case 5:
      searchMusic();
      break;
    case 6:
      filterMusic();
      break;
    case 7:
      alert("Chức năng đang phát triển")
      break;
    case 8:
      alert("Chức năng đang phát triển")
      break;
    case 9:
      alert("Chức năng đang phát triển")
      break;
    case 0:
      alert("Hẹn gặp lại")
      break;
    default:
      alert("Dữ liệu nhập vào không hợp lệ!!! Vui lòng nhập lại");
      break;
  }
  } while (choice != 0);