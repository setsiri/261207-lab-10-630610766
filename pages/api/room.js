import { readDB } from "../../backendLibs/dbLib";

export default function roomRoute(req, res) {
  const rooms = readDB();

  const result = rooms.map((room) => ({
    roomId: room.roomId,
    roomName: room.roomName,
  }));

  return res.json({ ok: true, rooms: result });
}
