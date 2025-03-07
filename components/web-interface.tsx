import { ConversationBubble } from '@/components/conversation-bubble';

const WebInterface = ({ activeDevice }: { activeDevice: 'web' | 'mobile' }) => {
  return (
            <div
          className={`absolute transition-all duration-500 transform ${
            activeDevice === "web" ? "translate-x-0 opacity-100 z-10" : "translate-x-full opacity-0 -z-10"
          }`}
        >
          <div className="relative mx-auto border border-gray-200 rounded-lg h-[500px] w-[700px] shadow-xl">
            <div className="h-[40px] bg-gray-100 border-b border-gray-200 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto bg-white rounded-full px-4 py-1 text-sm text-gray-500">explore.ai</div>
            </div>
            <div className="h-[calc(100%-40px)] w-full bg-white flex">
              <div className="w-1/4 border-r border-gray-200 p-4">
                <div className="text-lg font-bold mb-4">Scenarios</div>
                <div className="space-y-2">
                  <div className="p-2 bg-neon/10 rounded text-neon font-medium">Restaurant</div>
                  <div className="p-2 hover:bg-gray-100 rounded">Travel</div>
                  <div className="p-2 hover:bg-gray-100 rounded">Shopping</div>
                  <div className="p-2 hover:bg-gray-100 rounded">Job Interview</div>
                </div>
              </div>
              <div className="w-3/4 p-4 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4">
                  <ConversationBubble isUser={false}>
                    Hello! Welcome to our restaurant. Do you have a reservation?
                  </ConversationBubble>
                  <ConversationBubble isUser={true}>
                    No, I don't have reservation. Do you have table for two?
                  </ConversationBubble>
                  <ConversationBubble
                    isUser={false}
                    correction="No, I don't have a reservation. Do you have a table for two?"
                  >
                    You're missing articles. It should be "a reservation" and "a table". Let me check if we have a table
                    available.
                  </ConversationBubble>
                </div>
                <div className="mt-4 flex">
                  <input
                    type="text"
                    className="flex-1 border border-gray-200 rounded-l-lg p-3"
                    placeholder="Type your response..."
                  />
                  <button className="bg-neon text-white px-4 rounded-r-lg">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}