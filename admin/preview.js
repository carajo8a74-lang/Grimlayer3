
CMS.registerPreviewStyle('/admin/admin.css');
const PortfolioPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data','title']);
  const img = entry.getIn(['data','image']);
  const body = widgetFor('body');
  return h('div', {style:'max-width:720px;margin:24px auto;padding:16px;background:#171a21;border-radius:12px;color:#e6edf3'},
    h('h1', {}, title || 'Untitled'),
    img ? h('img',{src:img, style:'max-width:100%;border-radius:8px;margin:12px 0'}) : null,
    h('div', {style:'line-height:1.6'}, body)
  );
};
CMS.registerPreviewTemplate('portfolio', PortfolioPreview);
