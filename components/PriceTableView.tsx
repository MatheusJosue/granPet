import type { PriceTable } from "@/lib/pricing-data";

export default function PriceTableView({ table }: { table: PriceTable }) {
  return (
    <div className="card-surface overflow-hidden">
      <div className="border-b border-gold-700/15 bg-gold-100/50 px-5 py-3">
        <h4 className="font-display text-base font-semibold text-ink">
          {table.titulo}
        </h4>
      </div>
      <div className="scrollbar-gold overflow-x-auto">
        <table className="w-full min-w-[320px] text-sm">
          <thead>
            <tr className="text-left text-xs tracking-wide text-ink-light uppercase">
              {table.colunas.map((coluna) => (
                <th key={coluna} className="px-5 py-3 font-medium">
                  {coluna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.linhas.map((linha, i) => (
              <tr
                key={i}
                className="border-t border-gold-700/10 odd:bg-gold-100/20"
              >
                {linha.map((valor, j) => (
                  <td
                    key={j}
                    className={`px-5 py-3 ${
                      j === 0
                        ? "text-ink"
                        : "font-semibold text-gold-800"
                    }`}
                  >
                    {valor}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.nota && (
        <p className="border-t border-gold-700/10 px-5 py-3 text-xs leading-relaxed text-ink-light">
          {table.nota}
        </p>
      )}
    </div>
  );
}
