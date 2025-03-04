import { useState } from "react";
import useCrud from "../hooks/useCrud";

const PostList = () => {
  const { data, loading, error, createData, updateData, deleteData } = useCrud(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  if (loading)
    return (
      <p className="text-center text-lg font-semibold text-blue-500">
        Yuklanmoqda...
      </p>
    );
  if (error)
    return (
      <p className="text-red-500 text-center">
        Xatolik yuz berdi: {error.message}
      </p>
    );

  return (
    <div className="max-w-[1200px] mx-auto p-4 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Postlar</h2>
      <ul className="space-y-2">
        {data.map((post) => (
          <li
            key={post.id}
            className="p-3 bg-white rounded-lg shadow-md flex justify-between items-center"
          >
            {editId === post.id ? (
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border border-gray-400 rounded-md px-2 py-1 w-full"
              />
            ) : (
              <strong className="text-gray-900">{post.title}</strong>
            )}
            <div className="space-x-2">
              {editId === post.id ? (
                <>
                  <button
                    onClick={() => {
                      updateData(post.id, { title: editTitle });
                      setEditId(null);
                    }}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-700"
                  >
                    Saqlash
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-700"
                  >
                    Bekor qilish
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setEditId(post.id);
                      setEditTitle(post.title);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                  >
                    Tahrirlash
                  </button>
                  <button
                    onClick={() => deleteData(post.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                  >
                    O'chirish
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => createData({ title: "Yangi post", body: "Mazmuni" })}
        className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Post qo'shish
      </button>
    </div>
  );
};

export default PostList;
