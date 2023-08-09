export function SectionTitle({children, className}) {
    const defaultClassName = " section-title mb-5 ";

    return (
        <div className={defaultClassName + className}>{children}</div>
    );
}
export function SectionSubTitle({children}) {
    return (
        <div className="section-subtitle text-center">{children}</div>
    );
}

export function ContentBody ({children}) {
    return (
        <div className="content-body">
            {children}
        </div>
    )
}

export function FooterSectiontitle ({children}) {
    return (
        <div className="footer-section-title mb-3">
            {children}
        </div>
    )
}