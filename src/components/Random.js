import React, { useState } from 'react';

function Random() {
  const [Quotes] = useState([
    {
      id: 1,
      statement:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat corporis vero a doloremque impedit, qui eos eaque culpa tempore unde sapiente, debitis pariatur dignissimos. Ducimus consectetur eum nulla minus.'
    },
    {
      id: 2,
      statement: 'Lorem ipsum dolor sit!'
    },
    {
      id: 3,
      statement:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat corporis vero a doloremque impedit, qui eos eaque culpa tempore unde sapiente...'
    },
    {
      id: 4,
      statement:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat corporis vero a doloremque impedit, qui eos eaque culpa tempore unde sapiente, debitis pariatur dignissimos. Ducimus consectetur eum nulla minus.'
    },
    {
      id: 5,
      statement: 'Lorem ipsum!'
    }
  ]);
  return (
    <div className="justify-center flex flex-wrap">
      {Quotes.map(Quote => (
        <div>
          <div className="container justify-center flex flex-wrap">
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-8">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">{Quote.statement}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Random;
