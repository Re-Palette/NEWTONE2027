import React, { useState } from 'react';
import { X, Sparkles, QrCode, CheckCircle, Download, Share2, Calendar, MapPin, Ticket } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTone?: string;
}

export const EntryModal: React.FC<EntryModalProps> = ({
  isOpen,
  onClose,
  initialTone,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDay, setSelectedDay] = useState('2027.04.24 (FRI)');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['バイオ発酵スキンケア']);
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const interestsList = [
    'バイオ発酵スキンケア',
    'ホログラフィック・偏光メイク',
    '脳波アロマ調香体験',
    'AI肌診断＆スマートEMS',
    '学生起業家ピッチコンテスト',
    '限定コフレセット先行購入',
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Generate random serial
    const randomSerial = `NT2027-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomSerial);
    setTicketGenerated(true);

    // Fire celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ec4899', '#a855f7', '#38bdf8', '#fb7185'],
      });
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#080808] rounded-3xl border border-white/20 shadow-2xl text-[#F0F0F0]">
        
        {/* Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <span className="font-bebas text-2xl sm:text-3xl font-black tracking-tighter-extra uppercase text-[#F0F0F0]">
              NEWTONE 2027 VIP DIGITAL PASS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          
          {!ticketGenerated ? (
            <form onSubmit={handleGeneratePass} className="space-y-6">
              
              <div className="text-center space-y-1">
                <p className="text-[10px] font-mono text-pink-400 font-bold uppercase tracking-[0.3em]">
                  FREE PRE-REGISTRATION
                </p>
                <h3 className="font-zen text-xl sm:text-2xl font-bold text-[#F0F0F0]">
                  事前入場チケット（無料）を発行
                </h3>
                <p className="text-xs text-white/70 font-light">
                  事前登録で優先入場＆会場限定オリジナルホログラムポーチをプレゼント。
                </p>
              </div>

              {initialTone && (
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/15 text-center">
                  <span className="text-xs text-pink-300 font-medium font-zen">
                    診断トーン: <strong className="text-white font-mono">{initialTone}</strong> がパスに刻印されます
                  </span>
                </div>
              )}

              {/* Day Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest uppercase font-bold text-white/80">
                  ご来場予定日 / DATE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['2027.04.24 (FRI)', '2027.04.25 (SAT)', '2027.04.26 (SUN)'].map((day) => (
                    <button
                      type="button"
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`p-2.5 rounded-xl text-xs font-mono font-semibold border transition-all ${
                        selectedDay === day
                          ? 'bg-[#F0F0F0] text-[#080808] border-white shadow-[0_0_10px_rgba(255,255,255,0.4)]'
                          : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono tracking-widest uppercase font-bold text-white/80 mb-1.5">
                    お名前 / NAME <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例: 山田 花子 / Hanako Yamada"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-widest uppercase font-bold text-white/80 mb-1.5">
                    メールアドレス / EMAIL <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@newtone2027.jp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Interests Checklist */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest uppercase font-bold text-white/80">
                  特に気になる体験・カテゴリー（複数選択可）
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interestsList.map((interest) => {
                    const isChecked = selectedInterests.includes(interest);
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-2 rounded-xl text-[11px] font-medium text-left border transition-all ${
                          isChecked
                            ? 'bg-white/15 text-white border-white/40'
                            : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#F0F0F0] text-[#080808] hover:bg-pink-500 hover:text-white shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-98 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                デジタルVIPパスを発行する
              </button>

            </form>
          ) : (
            // Generated Holographic Digital Pass
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-white/20 text-pink-400 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-zen text-xl font-bold text-[#F0F0F0]">
                  事前登録が完了しました！
                </h3>
                <p className="text-xs text-white/70 mt-0.5 font-light">
                  当日会場の受付にてこちらのQRコードをご提示ください。
                </p>
              </div>

              {/* Holographic VIP Ticket Pass Card */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-black/80 border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Background watermarks */}
                <div className="absolute top-0 right-0 font-bebas text-9xl text-white/[0.03] select-none pointer-events-none -mr-10 -mt-10 font-black">
                  2027
                </div>

                <div className="relative z-10 space-y-6">
                  
                  {/* Pass Header */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <div>
                      <span className="font-cinzel text-lg font-bold tracking-widest text-white">NEWTONE</span>
                      <span className="text-[10px] font-mono text-pink-400 block tracking-widest font-semibold uppercase">
                        OFFICIAL VIP VISITOR PASS
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono font-bold border border-white/20 uppercase">
                      {initialTone || 'AUTHENTIC VIP'}
                    </span>
                  </div>

                  {/* Pass Body Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-white/50 uppercase font-bold">GUEST NAME</span>
                      <p className="text-sm sm:text-base font-bold text-[#F0F0F0] mt-0.5 font-zen">{name}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-white/50 uppercase font-bold">TICKET ID</span>
                      <p className="text-sm sm:text-base font-mono font-bold text-pink-400 mt-0.5">{ticketId}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-white/50 uppercase font-bold">VALID DATE</span>
                      <p className="text-xs sm:text-sm font-mono text-white mt-0.5">{selectedDay}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-white/50 uppercase font-bold">VENUE</span>
                      <p className="text-xs sm:text-sm text-white mt-0.5 font-zen">WITH HARAJUKU 3F</p>
                    </div>
                  </div>

                  {/* QR Code Block */}
                  <div className="p-4 rounded-2xl bg-[#F0F0F0] text-[#080808] flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-xs font-bold font-mono uppercase tracking-wider">NEWTONE 2027 ENTRY CODE</p>
                      <p className="text-[10px] text-zinc-600 font-mono">Scan at Entrance Booth A/B</p>
                      <span className="inline-block text-[9px] font-mono bg-black text-white px-2 py-0.5 rounded font-bold uppercase tracking-widest">
                        GIFT BAG RESERVED
                      </span>
                    </div>
                    <div className="w-16 h-16 bg-[#080808] text-white rounded-lg flex items-center justify-center p-1">
                      <QrCode className="w-14 h-14 text-white" />
                    </div>
                  </div>

                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => alert(`チケットID: ${ticketId} の画面キャプチャを保存してください。`)}
                  className="flex-1 py-3.5 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  パスを保存
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3.5 px-4 rounded-full bg-[#F0F0F0] text-[#080808] hover:bg-pink-500 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                >
                  完了
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
