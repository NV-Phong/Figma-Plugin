figma.showUI(__html__, { width: 300, height: 200 });

function getSelectedObjectInfo() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    return { message: "Không có đối tượng nào được chọn." };
  }

  // Lấy thông tin của đối tượng đầu tiên được chọn
  const node = selection[0];
  return {
    id: node.id,
    name: node.name,
    type: node.type,
    width: node.width,
    height: node.height,
    x: node.x,
    y: node.y,
  };
}

// Gửi thông tin đối tượng được chọn tới giao diện người dùng
figma.on("selectionchange", () => {
  const info = getSelectedObjectInfo();
  figma.ui.postMessage(info);
});