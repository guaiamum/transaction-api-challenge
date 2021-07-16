import React, { CSSProperties } from "react";

const locale = 'en-GB'
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const TransactionItem: React.FC<{ transaction: Transaction } & HTMLBaseElement> = React.forwardRef(
    ({
        transaction: { amount, currency, datetime, card: { lastNumbers } },
        style, className }
        , ref
    ) => {
        const formattedAmount = Intl
            .NumberFormat(locale, { style: 'currency', currency })
            .format(amount)

        // @ts-ignore
        const formattedDate = new Date(datetime).toLocaleDateString(locale, options)

        return <div
            className={className}
            style={style as CSSProperties}
            // @ts-ignore
            ref={ref}
        >
            {Array(4 * 3).fill('*').concat(lastNumbers).join(' ')}
            <p>
                {formattedAmount}
            </p>
            <time dateTime={datetime}>{formattedDate}</time>
        </div>
    })

export default TransactionItem