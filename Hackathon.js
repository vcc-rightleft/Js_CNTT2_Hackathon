let choice;
const playlists = [
  {
    id: 1,
    title: "SHAPE YOU",
    artist: "MONKEY",
    genre: "POP",
    duration: "180",
  },
  {
    id: 2,
    title: "SEE TINH",
    artist: "HOÀNG THÙY LINH",
    genre: "BALLAD",
    duration: "300",
  },
  {
    id: 3,
    title: "ĐOM ĐỚM",
    artist: "J97",
    genre: "RAP",
    duration: "300",
  },
  {
    id: 4,
    title: "PEACHES",
    artist: "JUSTIN",
    genre: "POP",
    duration: "450",
  },
  {
    id: 5,
    title: "IF YOU",
    artist: "BIGBANG",
    genre: "ROCK",
    duration: "370",
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
    Bài hát ${title} tác giả ${artist} thể loại ${genre} với thời lượng ${duration} giây vào playlist`)
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
  let msg = "========= DANH SÁCH BÀI HÁT ==========\n";
  playlists.forEach((song) => {
    msg += `ID: ${song.id}| Title: ${song.title}| Artist: ${song.artist}| Genre: ${song.genre}| Duration: ${song.duration} giây\n`;
    msg += `-----------------------------------------------------------------------\n`
  });
  alert(msg);
}
function updateMusic() {
  let nameUpdate = prompt("Nhập tên bài hát muốn cập nhật").toLocaleUpperCase();
  let indexUpdate = playlists.findIndex((item) => item.title === nameUpdate);
  let newDuration = prompt("Nhập thời lượng mới")
  if (isNaN(newDuration) || newDuration <= 0) {
    alert("Thời lượng không hợp lệ!!! Vui lòng nhập lại");
    return;
  }
  let newGenree = prompt("Nhập thể loại mới").toLocaleUpperCase();
  if(newGenree )
  if (indexUpdate !== -1) {
    playlists[indexUpdate].duration = newDuration;
    playlists[indexUpdate].genre = newGenree;
    alert(`Cập nhật thành công!!!\n
      Bài hát ${playlists[indexUpdate].title} Tác giả ${playlists[indexUpdate].artist} thể loại ${newGenree} với thời lượng ${newDuration} giây vào playlist`);
  } else {
    alert("Không tìm thấy bài hát có tên này.");
  }
}
function searchMusic() {
  let nameSearch = prompt("Nhập tên bài hát hoặc tác giả muốn tìm kiếm").toLocaleUpperCase();
  let indexSearch = playlists.findIndex((item) => item.title === nameSearch || item.artist === nameSearch);
  if (indexSearch !== -1) {
    alert(`Bài hát ${playlists[indexSearch].title} Tác giả ${playlists[indexSearch].artist} thể loại ${playlists[indexSearch].genre} với thời lượng ${playlists[indexSearch].duration} giây`);
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
  let msg = "========= DANH SÁCH BÀI HÁT ==========\n";
  filteredSongs.forEach((song) => {
    msg += `ID: ${song.id}| Title: ${song.title}| Artist: ${song.artist}| Genre: ${song.genre}| Duration: ${song.duration} giây\n`;
    msg += `-----------------------------------------------------------------------\n`
  });
  alert(msg);
}
function calculateTotalDuration() {
  let totalDuration = 0;
  for (let i = 0; i < playlists.length; i++) {
    totalDuration += parseInt(playlists[i].duration);
  }
  let totalMinutes = Math.floor(totalDuration / 60);
  let totalSeconds = totalDuration % 60;
  alert(`Tổng thời lượng của playlist là ${totalMinutes} phút ${totalSeconds} giây với ${playlists.length} bài hát.`);
}
function sortMusic() {
  let choiceSort
  do {
    choiceSort = +prompt("Bạn muốn sắp xếp tăng dần hay giảm dần?\n1.Tăng dần\n2.Giảm dần");
    if (choiceSort !== 1 && choiceSort !== 2) {
      alert("Lựa chọn không hợp lệ. Vui lòng chọn 1 hoặc 2.");
    }
  } while (choiceSort !== 1 && choiceSort !== 2);
  if (choiceSort === 1) {
    playlists.sort((a, b) => {
      if (a.duration < b.duration) {
        return -1;
      } else if (a.duration > b.duration) {
        return 1;
      } else {
        return 0;
      }
    });
    alert("Sắp xếp tăng dần thành công");
    displayMusic();
  }
  if (choiceSort === 2) {
    playlists.sort((a, b) => {
      if (a.duration > b.duration) {
        return -1;
      } else if (a.duration < b.duration) {
        return 1;
      } else {
        return 0;
      }
    });
    alert("Sắp xếp giảm dần thành công");
    displayMusic();
  }
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
      calculateTotalDuration();
      break;
    case 8:
      sortMusic();
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